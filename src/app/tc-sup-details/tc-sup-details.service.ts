import { Injectable, ɵConsole } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Student, StudentVacancies ,Supervisor,StudentWithSupervisor} from '../student-index/student'
import {ConfigService} from '../config/config.service' 
import { ActivatedRoute } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable()
export class TcSupDetailsService {
  orgsUrl = 'http://localhost:4200/api/organization';
  studentUrNoRogs='http://localhost:4200/api/student?haveOrgs=noOrgs'
  vacancyUrl='http://localhost:4200/api/vacancy'
  postUrl='http://localhost:4200/api/student'
  deleteUrl='http://localhost:4200/api/student'

  constructor(private http: HttpClient, private configService: ConfigService ,private activatedRoute:ActivatedRoute) { }

  // getOrganizationService(): Observable<HttpResponse<Organization[]>> {
  //   return this.http.get<Organization[]>(
  //     this.orgsUrl, { observe: 'response' });

  // }
  
  getSupervisorService(id): Observable<HttpResponse<Supervisor>> {
    console.log(id)

    const url=`http://localhost:4200/api/supervisor/${id}`
    return this.http.get<Student>(
    url, { observe: 'response' });
    

  }
  getStudentSupervisorService(id): Observable<HttpResponse<StudentWithSupervisor>> {
    console.log(id)

    const url=`http://localhost:4200/api/supervisor/student/${id}`
    return this.http.get<StudentWithSupervisor>(
    url, { observe: 'response' });
    

  }
  getStudentVacanciesService(): Observable<HttpResponse<StudentVacancies>> {

    const url='http://localhost:4200/api/student-vacancies'
    return this.http.get<StudentVacancies>(
        url, { observe: 'response' });
    

  }

  listStudentNoOrgs(): Observable<HttpResponse<Student>> {
    return this.http.get<Student>(
      this.studentUrNoRogs, { observe: 'response' });
  }






//   postStudentToSupervisorService(id): Observable<HttpResponse<Student>> {
//     console.log(id)

//     const url=`http://localhost:4200/api/student/${id}`
//     return this.http.patch<Student>(
//     url, { observe: 'response' });
    

//   }
// postStudentToSupervisorService (id): Observable<Student> {

//     const url = `http://localhost:4200/api/student/${id}` // DELETE api/heroes/42

//     return this.http.patch<Student>(url, httpOptions)
      
//   }

postStudentToSupervisorService(student:Student): Observable<Student> {
    
    
    const url = `http://localhost:4200/api/student/${student.id}`
    return this.http.post<Student>(url ,student, httpOptions)
  }
  
//   postStudentService(student: Student): Observable<Student> {
//     const url = `http://localhost:4200/api/student/${id}`
//     console.log(student,"get console")
//     return this.http.post<Student>(this.url,JSON.stringify(student) , httpOptions)
     
//   }
  deleteStudentService(id): Observable<any> {
    console.log(id,"delete console")
    const url=`http://localhost:4200/api/student/${id}`
    console.log(url)
    return this.http.delete(url,httpOptions)
     
  }




  updateStudentService (student:Student): Observable<Student> {
    console.log("console from studentUpdate",student)

    console.log("console from studentUpdate",student.id)
    const url = `http://localhost:4200/api/student/${student.id}` // DELETE api/heroes/42

    return this.http.patch<Student>(url, student, httpOptions)
      
  }


 






  makeError() {
    this.configService.makeIntentionalError().subscribe(null, error => error = error);
  }
}