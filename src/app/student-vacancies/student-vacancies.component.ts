import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {StudentVacanciesService} from './student-vacancies.service'
import {StudentVacancies} from '../student-index/student'

@Component({
  selector: 'app-student-vacancies',
  templateUrl: './student-vacancies.component.html',
  styleUrls: ['./student-vacancies.component.css'],
  providers: [ StudentVacanciesService  ],
})
export class StudentVacanciesComponent implements OnInit {
studentVacancies:StudentVacancies
  constructor(private route: ActivatedRoute, private router: Router ,private studentVacanciesService:StudentVacanciesService) { }

  ngOnInit(): void {
    console.log("hi")
    this.studentVacanciesService.getStudentVacanciesService(this.route.snapshot.parent.params.id)
    .subscribe(res=>{
      this.studentVacancies=res.body
      console.log(this.studentVacancies)
    })

  }
  Approve(id){
console.log('AAAA :: ',id)
    this.studentVacanciesService.approveStudentOrgsService(id)
    .subscribe(res=>{
      console.log(res)

    })

  }

}