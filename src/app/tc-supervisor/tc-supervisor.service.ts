import { Injectable, ɵConsole } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Supervisor } from '../student-index/student'
import {ConfigService} from '../config/config.service' 


@Injectable()
export class TcSupervisorService {
  orgsUrl = 'http://localhost:4200/api/organization';
  supervisortUrl='http://localhost:4200/api/supervisor'
  vacancyUrl='http://localhost:4200/api/vacancy'
  postUrl='http://localhost:4200/api/student'
  deleteUrl='http://localhost:4200/api/student'

  constructor(private http: HttpClient, private configService: ConfigService ) { }

  // getOrganizationService(): Observable<HttpResponse<Organization[]>> {
  //   return this.http.get<Organization[]>(
  //     this.orgsUrl, { observe: 'response' });

  // }
  
  getSupervisorService(id): Observable<HttpResponse<Supervisor>> {
    console.log(id)

    const url=`http://localhost:4200/api/student${id}`
    return this.http.get<Supervisor>(
    url, { observe: 'response' });
    

  }

  listSupervisorService(): Observable<HttpResponse<Supervisor>> {
    return this.http.get<Supervisor>(
      this.supervisortUrl, { observe: 'response' });
  }







  
//   postStudentService(student: Student): Observable<Student> {
//     console.log(student,"get console")
//     return this.http.post<Student>(this.postUrl,JSON.stringify(student) , httpOptions)
     
//   }
//   deleteStudentService(student: Student): Observable<Student> {
//     console.log(student.id,"delete console")
//     const url=`http://localhost:4200/api/student/${student.id}`
//     console.log(url+"url")
//     return this.http.delete<Student>(url,httpOptions)
     
//   }




//   updateStudentService (student:Student): Observable<Student> {
//     console.log("console from studentUpdate",student)

//     console.log("console from studentUpdate",student.id)
//     const url = `http://localhost:4200/api/student/${student.id}` // DELETE api/heroes/42

//     return this.http.patch<Student>(url, student, httpOptions)
      
//   }


 






  makeError() {
    this.configService.makeIntentionalError().subscribe(null, error => error = error);
  }
}