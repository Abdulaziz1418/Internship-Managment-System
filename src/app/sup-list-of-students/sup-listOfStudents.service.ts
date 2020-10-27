import { Injectable, ɵConsole } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Student,StudentReport,Supervisor } from '../student-index/student'
import {ConfigService} from '../config/config.service' 
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable()
export class SupListOfStudentServices {
  orgsUrl = 'http://localhost:4200/api/organization';
  vacancyUrl='http://localhost:4200/api/vacancy'
  postUrl='http://localhost:4200/api/student'
  deleteUrl='http://localhost:4200/api/student'

  constructor(private http: HttpClient, private configService: ConfigService ,private route:ActivatedRoute) { }

  // getOrganizationService(): Observable<HttpResponse<Organization[]>> {
  //   return this.http.get<Organization[]>(
  //     this.orgsUrl, { observe: 'response' });

  // }
  
  getStudentsService(id): Observable<HttpResponse<Student>> {
    console.log(id)

    const url=environment.studentUrl+ id
    return this.http.get<Student>(
    url, { observe: 'response' });
    

  }

  getStudentResponse(id): Observable<HttpResponse<StudentReport>> {
   const reportUrl=`http://localhost:4200/api/report/sup/${id}`

    return this.http.get<StudentReport>(
        reportUrl, { observe: 'response' });
    
  }


  GetStudentReportService(id): Observable<any> {
    console.log(id,"delete console")
    const url=`http://localhost:4200/api/report/${id}`
    console.log(url)
    return this.http.get(url,httpOptions)
     
  }
  getSupervisorService(id): Observable<HttpResponse<Supervisor>> {
    console.log(id)

    const url=`http://localhost:4200/api/supervisor/${id}`
    return this.http.get<Supervisor>(  url, { observe: 'response'}) ;
    

  }




  
  postStudentService(student: Student): Observable<Student> {
    console.log(student,"get console")
    return this.http.post<Student>(this.postUrl,JSON.stringify(student) , httpOptions)
     
  }
  
  deleteStudentService(student: Student): Observable<Student> {
    console.log(student.id,"delete console")
    const url=`http://localhost:4200/api/student/${student.id}`
    console.log(url+"url")
    return this.http.delete<Student>(url,httpOptions)
     
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












