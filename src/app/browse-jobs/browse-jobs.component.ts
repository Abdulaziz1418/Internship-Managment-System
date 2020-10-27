import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {BrowseJobsService} from '../browse-jobs/browseJobs.service'
import {ConfigService} from '../config/config.service'
import {Vacancies} from '../student-index/student'
import {VacancyApplication} from '../student-index/student'
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-browse-jobs',
  templateUrl: './browse-jobs.component.html',
  styleUrls: ['./browse-jobs.component.css'],
  providers: [ BrowseJobsService  ],

  
})

export class BrowseJobsComponent implements OnInit {


  vacancies:Vacancies
  
  vacancyApplication={}

  constructor(private route: ActivatedRoute, private router: Router, private browseJobsService:BrowseJobsService,) { }
  
  ngOnInit(): void {
    this.showVacanciesResponse()
  }
 
 

    showVacanciesResponse() {

      this.browseJobsService.getVacanciesResponse()
        .subscribe(resp => {
     

          this.vacancies = resp.body
        console.log(this.vacancies)


        
        });
    }
    submitApplication(i){
      this.vacancyApplication={
        vacancy_id:i.vacancy_id,
        student_id:this.route.snapshot.parent.params.id
      }
      
      
      this.browseJobsService.vacancyApplicationService(this.vacancyApplication)
      .subscribe(res=>{
        console.log(res)
      })
      console.log(this.vacancyApplication)

    }
}