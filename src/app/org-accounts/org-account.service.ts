import { Injectable, ɵConsole } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
// import { Organization } from '../shared/organization'
import {Vacancies} from '../student-index/student'
import { HttpHeaders } from '@angular/common/http';
import { ConfigService } from '../config/config.service'
import { Observable } from 'rxjs';
import { catchError, map, delay } from 'rxjs/operators';
import { Organization } from '../student-index/student'



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
export class OrgAccountsServices {
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
  
  getOrganizationService(id): Observable<HttpResponse<Organization>> {
    console.log(id)

    const url=`http://localhost:4200/api/organization/${id}`
    return this.http.get<Organization>(  url, { observe: 'response'}) ;
    

  }

  // getVacanciesService(): Observable<HttpResponse<Vacancy[]>> {
  //   return this.http.get<Vacancy[]>(
  //     this.vacancyUrl, { observe: 'response' });

  // }








  
  


  makeError() {
    this.configService.makeIntentionalError().subscribe(null, error => error = error);
  }
}