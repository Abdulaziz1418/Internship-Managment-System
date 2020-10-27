import { Injectable, ɵConsole } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
// import { Organization } from '../shared/organization'
import {Vacancies} from '../student-index/student'
import { HttpHeaders } from '@angular/common/http';
import { ConfigService } from '../config/config.service'
import { Observable } from 'rxjs';
import { catchError, map, delay } from 'rxjs/operators';
import { Supervisor } from '../student-index/student'



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token')}`
  

  })
};
const httpAuth = {
    headers: new HttpHeaders({
      
     Authorization: `Bearer ${localStorage.getItem('token')}`
  
    })
  };

@Injectable({ providedIn: 'root' })
export class SupervisorAccountsServices {
  orgsUrl = 'http://localhost:4200/api/organization';
  studentUrl='http://localhost:4200/api/student'
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

    const url=`http://localhost:4200/api/supervisor/${id}`
    return this.http.get<Supervisor>(  url, { observe: 'response'}) ;
    

  }

  // getVacanciesService(): Observable<HttpResponse<Vacancy[]>> {
  //   return this.http.get<Vacancy[]>(
  //     this.vacancyUrl, { observe: 'response' });

  // }








  
  postStudentService(supervisor: Supervisor): Observable<Supervisor> {
    console.log(supervisor,"get console")
    return this.http.post<Supervisor>(this.postUrl,JSON.stringify(supervisor) , httpOptions)
     
  }
  deleteStudentService(student: Supervisor): Observable<Supervisor> {
    console.log(student.id,"delete console")
    const url=`http://localhost:4200/api/student/${student.id}`
    console.log(url+"url")
    return this.http.delete<Supervisor>(url,httpOptions)
     
  }

  


  updateStudentService (student:Supervisor): Observable<Supervisor> {
    console.log("console from studentUpdate",student)

    console.log("console from studentUpdate",student.id)
    const url = `http://localhost:4200/api/student/${student.id}` // DELETE api/heroes/42

    return this.http.patch<Supervisor>(url, student, httpOptions)
      
  }


  PostVacanciesService(vacancy: Vacancies): Observable<Vacancies> {
    console.log(vacancy,"get console")
    return this.http.post<Vacancies>(this.vacancyUrl,JSON.stringify(vacancy) , httpOptions)
     
  }






  makeError() {
    this.configService.makeIntentionalError().subscribe(null, error => error = error);
  }
}