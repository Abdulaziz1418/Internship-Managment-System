import { Injectable, ɵConsole } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
// import { Organization } from '../shared/organization'
import {Vacancies} from '../student-index/student'
import { HttpHeaders } from '@angular/common/http';
import { ConfigService } from '../config/config.service'
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Student,Supervisor,Organization,TrainingCommittee } from '../student-index/student'


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'enctype': 'multipart/form-data'

  })
};

@Injectable()
export class CreateAccountService {
  orgsUrl = 'http://localhost:4200/api/organization';
  studentUrl='http://localhost:4200/api/student'
  vacancyUrl='http://localhost:4200/api/vacancy'
  studentPostUrl='http://localhost:4200/api/student/sign-up'
  deleteUrl='http://localhost:4200/api/student'
  supervisorPostUrl = 'http://localhost:4200/api/supervisor/sign-up'
  OrgnizationPostUrl='http://localhost:4200/api/organization/sign-up'
  TrainingCommitteePostUrl='http://localhost:4200/api/trainingcommittee/sign-up'

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








  
  postStudentService(student: Student): Observable<Student> {
    var cvDocName  = student.cv.split('fakepath\\')
       student.cv = cvDocName[1]
    var ARdocname = student.academicRecord.split('fakepath\\')
       student.academicRecord = ARdocname[1]
      console.log('record',student)
    console.log(student,"get console")
    return this.http.post<Student>(this.studentPostUrl,JSON.stringify(student) , httpOptions)
     
  }

  postSupervisorService(supervisor: Supervisor): Observable<Supervisor> {
    console.log(supervisor,"get console")
    return this.http.post<Supervisor>(this.supervisorPostUrl,JSON.stringify(supervisor) , httpOptions)
     
  }
  postOrgnizationService(organization: Organization): Observable<Organization> {
    console.log(organization,"get console")
    return this.http.post<Organization>(this.OrgnizationPostUrl,JSON.stringify(organization) , httpOptions)
     
  }
  postTrainingCommitteeService(trainingCommittee: TrainingCommittee): Observable<TrainingCommittee> {
    console.log(trainingCommittee,"get console")
    return this.http.post<TrainingCommittee>(this.TrainingCommitteePostUrl,JSON.stringify(trainingCommittee) , httpOptions)
     
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