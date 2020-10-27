import { Component, OnInit } from '@angular/core';
import {Student,StudentVacancies} from '../student-index/student'
import {ConfigService} from '../config/config.service'
import {StudentsSubmissionServices} from './studentssubmission.service'
import { ActivatedRoute, Router } from '@angular/router';
import {OrganizationResolve} from './resolve.service'
@Component({
  selector: 'app-studentssubmission',
  templateUrl: './studentssubmission.component.html',
  styleUrls: ['./studentssubmission.component.css'],
  providers: [ StudentsSubmissionServices  ,ConfigService],

})
export class StudentssubmissionComponent implements OnInit {
  studentVacancies:StudentVacancies

  constructor(private StudentsSubmissionServices:StudentsSubmissionServices,private OrganizationResolve:OrganizationResolve,private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    
  this.showStudentVacancies()
  }
  showStudentVacancies(){
    this.StudentsSubmissionServices.getStudentVacanciesService(this.route.snapshot.parent.params.id)
    .subscribe(res=>{
 
     this.studentVacancies=res.body
     console.log(this.studentVacancies)
 
    })
  }

  accept(id){
    console.log(id)
    if(confirm("Are You Sure?")){
      
      this.StudentsSubmissionServices.acceptStudentService(id)
    .subscribe(res => {
      console.log(res)
      this.showStudentVacancies()

    })
console.log(id)
  }
    }
    reject(id){
      if(confirm("Are You Sure?")){
        
        this.StudentsSubmissionServices.rejectStudentService(id)
      .subscribe(res => {
        console.log(res)
        this.showStudentVacancies()
  
      })
  console.log(id)
    }
      }

}
