import { Injectable, ɵConsole } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Student, StudentVacancies } from '../student-index/student'
import {ConfigService} from '../config/config.service' 
import { ActivatedRoute, Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable()
export class StudentsSubmissionServices {
  orgsUrl = 'http://localhost:4200/api/organization';
  studentUrl='http://localhost:4200/api/student'
  vacancyUrl='http://localhost:4200/api/vacancy'
  postUrl='http://localhost:4200/api/student'
  deleteUrl='http://localhost:4200/api/student'

  constructor(private http: HttpClient, private configService: ConfigService ,private route: ActivatedRoute, private router: Router ) { }

  // getOrganizationService(): Observable<HttpResponse<Organization[]>> {
  //   return this.http.get<Organization[]>(
  //     this.orgsUrl, { observe: 'response' });

  // }
  
  getStudentsService(id): Observable<HttpResponse<Student>> {
    console.log(id)

    const url=`http://localhost:4200/api/student${id}`
    return this.http.get<Student>(
    url, { observe: 'response' });
    

  }
  getStudentVacanciesService(id): Observable<HttpResponse<StudentVacancies>> {

    const url=`http://localhost:4200/api/student-vacancies/${id}?type=organization`
    return this.http.get<StudentVacancies>(
        url, { observe: 'response' });
    

  }
   acceptStudentService (studentVacancies:StudentVacancies): Observable<StudentVacancies> {
      
    console.log("console from studentUpdate",studentVacancies)
    console.log(typeof(studentVacancies))
    const studentAccept = `http://localhost:4200/api/student-vacancies/accept/${this.route.snapshot.parent.params.id}` 

    return this.http.put<StudentVacancies>(studentAccept, studentVacancies)
      
  }

  rejectStudentService (studentVacancies:StudentVacancies): Observable<StudentVacancies> {
    console.log("console from studentUpdate",studentVacancies)
    console.log(typeof(studentVacancies))
    const studentAccept = `http://localhost:4200/api/student-vacancies/reject/${studentVacancies}` 

    return this.http.put<StudentVacancies>(studentAccept, httpOptions)
      
  }


  getStudentResponse(): Observable<HttpResponse<Student>> {
    return this.http.get<Student>(
      this.studentUrl, { observe: 'response' });
  }







  
  postStudentService(student: Student): Observable<Student> {
    console.log(student,"get console")
    return this.http.post<Student>(this.postUrl,JSON.stringify(student) , httpOptions)
     
  }
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