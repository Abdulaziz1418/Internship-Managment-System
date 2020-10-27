import { Injectable, ɵConsole } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Student,StudentDocument } from '../student-index/student'
import {ConfigService} from '../config/config.service' 

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable()
export class TCStudentDocumentServices {
  orgsUrl = 'http://localhost:4200/api/organization';
  studentDocUrl='http://localhost:4200/api/document/studentDoc'
  vacancyUrl='http://localhost:4200/api/vacancy'
  postUrl='http://localhost:4200/api/student'
  deleteUrl='http://localhost:4200/api/student'

  constructor(private http: HttpClient, private configService: ConfigService ) { }

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

  getStudentResponse(): Observable<HttpResponse<StudentDocument>> {
    return this.http.get<StudentDocument>(
      this.studentDocUrl, { observe: 'response' });
  }


GetStudentDocumentService(id): Observable<any> {
    console.log(id,"delete console")
    const url=`http://localhost:4200/api/document/${id}`
    console.log(url)
    return this.http.get(url,httpOptions)
     
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












