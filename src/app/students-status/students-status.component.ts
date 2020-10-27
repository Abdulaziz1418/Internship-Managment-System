import { Component, OnInit } from '@angular/core';
import {Student,StudentVacancies} from '../student-index/student'
import {ConfigService} from '../config/config.service'
import {TCStudentStatusServices} from './students-status.service'
import { Key } from 'protractor';
import { from } from 'rxjs';
@Component({
  selector: 'app-students-status',
  templateUrl: './students-status.component.html',
  styleUrls: ['./students-status.component.css'],
  providers: [ TCStudentStatusServices  ,ConfigService],

})
export class StudentsStatusComponent implements OnInit {
  studentVacancies:StudentVacancies

  student:Student
  constructor(private TCStudentStatusServices: TCStudentStatusServices) { }

  ngOnInit(): void {
    this.TCStudentStatusServices.getStudentVacanciesService()
   .subscribe(res=>{

    this.studentVacancies=res.body
    console.log(this.studentVacancies)

    
   })

  }
  deleteStudentFromOrgs(id) {
    if (confirm("Are You Sure?")) {

      this.TCStudentStatusServices.deleteStudentFromOrgsService(id)
        .subscribe(resp => {
          console.log(resp)
        })
    }
    console.log('Student ID :: ', id)

  }

}
