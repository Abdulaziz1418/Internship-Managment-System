import { Injectable, ɵConsole } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Student,Organization,Supervisor } from '../student-index/student'
import {ConfigService} from '../config/config.service' 

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable()
export class TCApproveAccountsServices {
  orgsUrl = 'http://localhost:4200/api/organization/active';
  studentUrl='http://localhost:4200/api/student?haveOrgs=approve'
  vacancyUrl='http://localhost:4200/api/vacancy'
  postUrl='http://localhost:4200/api/student'
  deleteUrl='http://localhost:4200/api/student'
  supUrl='http://localhost:4200/api/supervisor/active'

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

  getStudentResponse(): Observable<HttpResponse<Student>> {
    return this.http.get<Student>(
      this.studentUrl, { observe: 'response' });
  }
  getOrgsResponse(): Observable<HttpResponse<Organization>> {
    return this.http.get<Organization>(
      this.orgsUrl, { observe: 'response' });
  }

  getSupResponse(): Observable<HttpResponse<Supervisor>> {
    return this.http.get<Supervisor>(
      this.supUrl, { observe: 'response' });
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

  deleteSupervisorService(id): Observable<any> {
    console.log(id,"delete console")
    const url=`http://localhost:4200/api/supervisor/${id}`
    console.log(url)
    return this.http.delete(url,httpOptions)
     
  }
  deleteOrgsService(id): Observable<any> {
    console.log(id,"delete console")
    const url=`http://localhost:4200/api/organization/${id}`
    console.log(url)
    return this.http.delete(url,httpOptions)
     
  }


  approveStudentService (student:Student): Observable<Student> {
    console.log("console from studentUpdate",student)
    console.log(typeof(student))
    const studentApprove = `http://localhost:4200/api/student/approve/${student}` 

    return this.http.put<Student>(studentApprove, httpOptions)
      
  }
  approveOrgsService (organization:Organization): Observable<Organization> {
    console.log("console from orgsUpdate",organization)
    console.log(typeof(organization))
    const orgsApprove = `http://localhost:4200/api/organization/approve/${organization}` 

    return this.http.put<Organization>(orgsApprove, httpOptions)
      
  }
  approveSupService (supervisor:Supervisor): Observable<Supervisor> {
    console.log("console from SupUpdate",supervisor)
    console.log(typeof(supervisor))
    const supApprove = `http://localhost:4200/api/supervisor/approve/${supervisor}` 

    return this.http.put<Supervisor>(supApprove, httpOptions)
      
  }


 






  makeError() {
    this.configService.makeIntentionalError().subscribe(null, error => error = error);
  }
}