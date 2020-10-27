import { Injectable, ɵConsole } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
// import { Organization } from '../shared/organization'
import { HttpHeaders } from '@angular/common/http';
import { ConfigService } from '../config/config.service'
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Vacancies, Organization } from '../student-index/student'


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable()
export class PostVacanciesService {
  vacancyUrl='http://localhost:4200/api/vacancy'


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
  getOrganizationService(id): Observable<HttpResponse<Organization>> {
    console.log(id)

    const url=`http://localhost:4200/api/organization/${id}`
    return this.http.get<Organization>(  url, { observe: 'response'}) ;
    

  }

  // getVacanciesService(): Observable<HttpResponse<Vacancy[]>> {
  //   return this.http.get<Vacancy[]>(
  //     this.vacancyUrl, { observe: 'response' });

  // }








  
  PostVacanciesService(id,vacancy: Vacancies): Observable<Vacancies> {
    const vacancyUrl=`http://localhost:4200/api/vacancy/${id}`

    console.log(vacancy,"get console")
    return this.http.post<Vacancies>(vacancyUrl,JSON.stringify(vacancy) , httpOptions)
     
  }
 







//   makeError() {
//     this.configService.makeIntentionalError().subscribe(null, error => error = error);
//   }
}












