import { Injectable, ɵConsole } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
// import { Organization } from '../shared/organization'
import {Vacancies} from '../student-index/student'
import { HttpHeaders } from '@angular/common/http';
import { ConfigService } from '../config/config.service'
import { Observable } from 'rxjs';
import { catchError, map, delay } from 'rxjs/operators';
import { Student,Report ,Document} from '../student-index/student'
import { ActivatedRoute } from '@angular/router';



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
export class DocumentServices {
  orgsUrl = 'http://localhost:4200/api/organization';
  studentUrl='http://localhost:4200/api/student'
  vacancyUrl='http://localhost:4200/api/vacancy'
  postUrl='http://localhost:4200/api/student'
  deleteUrl='http://localhost:4200/api/student'

  postReport = 'http://localhost:4200/api/report'
  postDecoument = 'http://localhost:4200/api/document'
  constructor(private http: HttpClient, private configService: ConfigService,private route:ActivatedRoute ) { }

  // getOrganizationService(): Observable<HttpResponse<Organization[]>> {
  //   return this.http.get<Organization[]>(
  //     this.orgsUrl, { observe: 'response' });

  // }
  
  getStudentService(id): Observable<HttpResponse<Student>> {
    console.log(id)

    const url=`http://localhost:4200/api/student/${id}`
    return this.http.get<Student>(  url, { observe: 'response'}) ;
    

  }
  postReportService(report: Report): Observable<Report> {
    var DocName  = report.report.split('fakepath\\')
    report.report = DocName[1]
    report.student_id = this.route.snapshot.parent.params.id
    console.log(report,"get console")
    return this.http.post<Report>(this.postReport,JSON.stringify(report) , httpOptions)
     
  }
  postDocumentService(document: Document): Observable<Document> {
    var DocName  = document.document.split('fakepath\\')
    document.document = DocName[1]
    document.student_id = this.route.snapshot.parent.params.id
    console.log(document,"get console")
    return this.http.post<Document>(this.postDecoument,JSON.stringify(document) , httpOptions)
     
  }

  // getVacanciesService(): Observable<HttpResponse<Vacancy[]>> {
  //   return this.http.get<Vacancy[]>(
  //     this.vacancyUrl, { observe: 'response' });

  // }








  
//   postStudentService(student: Student): Observable<Student> {
//     console.log(student,"get console")
//     return this.http.post<Student>(this.postUrl,JSON.stringify(student) , httpOptions)
     
//   }
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