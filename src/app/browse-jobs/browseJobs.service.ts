import { Injectable, ɵConsole } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Vacancies } from '../student-index/student'


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable()
export class BrowseJobsService {
//   orgsUrl = 'http://localhost:4200/api/organization';
//   studentUrl='http://localhost:4200/api/student'
  vacancyUrl='http://localhost:4200/api/vacancy'
//   postUrl='http://localhost:4200/api/student'
//   deleteUrl='http://localhost:4200/api/student'
studentVacanciesUrl='http://localhost:4200/api/student-vacancies'

  constructor(private http: HttpClient ) { }

  // getOrganizationService(): Observable<HttpResponse<Organization[]>> {
  //   return this.http.get<Organization[]>(
  //     this.orgsUrl, { observe: 'response' });

  // }
  
  getVacanciesService(id): Observable<HttpResponse<Vacancies>> {
    console.log(id)

    const url=`http://localhost:4200/api/vacancy`
    return this.http.get<Vacancies>(
    url, { observe: 'response' });
    

  }

  getVacanciesResponse(): Observable<HttpResponse<Vacancies>> {
    return this.http.get<Vacancies>(
      this.vacancyUrl, { observe: 'response' });
  }

  // getVacanciesService(): Observable<HttpResponse<Vacancy[]>> {
  //   return this.http.get<Vacancy[]>(
  //     this.vacancyUrl, { observe: 'response' });

  // }
  vacancyApplicationService(vacancy): Observable<Vacancies> {
    console.log(vacancy,"get console")
    return this.http.post<Vacancies>(this.studentVacanciesUrl,JSON.stringify(vacancy) , httpOptions)
     
  }








  
  PostVacanciesService(vacancy: Vacancies): Observable<Vacancies> {
    console.log(vacancy,"get console")
    return this.http.post<Vacancies>(this.vacancyUrl,JSON.stringify(vacancy) , httpOptions)
     
  }
 







//   makeError() {
//     this.configService.makeIntentionalError().subscribe(null, error => error = error);
//   }
}