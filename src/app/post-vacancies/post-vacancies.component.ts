import { Component, OnInit } from '@angular/core';
import {Vacancies} from '../student-index/student'
import {PostVacanciesService} from '../post-vacancies/postvacncies.service'
import { FormControl, FormGroup } from '@angular/forms'
import { FormBuilder } from '@angular/forms'
import { Validators } from '@angular/forms'
import { ControlContainer, NgForm } from '@angular/forms';
import * as _ from 'lodash';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-post-vacancies',
  templateUrl: './post-vacancies.component.html',
  styleUrls: ['./post-vacancies.component.css'],
  providers: [PostVacanciesService]
})
export class PostVacanciesComponent implements OnInit {

  newVacancy:Vacancies
  newVacancyForm
  constructor(private postVacanciesService: PostVacanciesService,private route:ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.createForm()
  }

  createForm(){
    this.newVacancyForm = new FormGroup({
      'id': new FormControl(),

      'job_title': new FormControl(),
      'job_description': new FormControl(),
 
    });

  }
  onSubmit(){
    this.newVacancy=this.newVacancyForm.value
    console.log(this.newVacancyForm)
    this.postVacancy()
  }
  postVacancy() {
    this.postVacanciesService
      .PostVacanciesService(this.route.snapshot.parent.params.id,this.newVacancy)
      .subscribe(res => {
        console.log(res)
      
      })
      alert('Thanks, your vacancy posted')

}
}
