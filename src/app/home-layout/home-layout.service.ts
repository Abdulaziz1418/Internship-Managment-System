import { Injectable, ɵConsole } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
// import { Organization } from '../shared/organization'
import {Vacancies} from '../student-index/student'
import { HttpHeaders } from '@angular/common/http';
import { ConfigService } from '../config/config.service'
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Student,Login } from '../student-index/student'



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable()
export class HomeLayoutService {
  orgsUrl = 'http://localhost:4200/api/organization';
  studentUrl='http://localhost:4200/api/student'
  loginUrl='http://localhost:4200/api/student/login'

  SupervisorloginUrl='http://localhost:4200/api/supervisor/login'
  OrgnizationloginUrl='http://localhost:4200/api/organization/login'
  TrainingCommitteeloginUrl='http://localhost:4200/api/trainingcommittee/login'

  vacancyUrl='http://localhost:4200/api/vacancy'
  postUrl='http://localhost:4200/api/student/sign-up'
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

  // getVacanciesService(): Observable<HttpResponse<Vacancy[]>> {
  //   return this.http.get<Vacancy[]>(
  //     this.vacancyUrl, { observe: 'response' });

  // }








  
  postLogintService(login: Login): Observable<Login> {
    return this.http.post<Login>(this.loginUrl,login , httpOptions)
    
     
  }

  postSupervisorLogintService(login: Login): Observable<Login> {
    return this.http.post<Login>(this.SupervisorloginUrl,login , httpOptions)
    
     
  }
  postOrgnizationLogintService(login: Login): Observable<Login> {
    return this.http.post<Login>(this.OrgnizationloginUrl,login , httpOptions)
    
     
  }
  postTrainingCommitteeLogintService(login: Login): Observable<Login> {
    return this.http.post<Login>(this.TrainingCommitteeloginUrl,login , httpOptions)
    
     
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


  PostVacanciesService(vacancy: Vacancies): Observable<Vacancies> {
    console.log(vacancy,"get console")
    return this.http.post<Vacancies>(this.vacancyUrl,JSON.stringify(vacancy) , httpOptions)
     
  }
 






  makeError() {
    this.configService.makeIntentionalError().subscribe(null, error => error = error);
  }
}