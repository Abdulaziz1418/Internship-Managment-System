import { Component, OnInit } from '@angular/core';
import {Student} from '../student-index/student'
import {ListOfStudentServices} from './list-of-students.service'
import {ConfigService} from '../config/config.service'
import { from } from 'rxjs';
@Component({
  selector: 'app-list-of-students',
  templateUrl: './list-of-students.component.html',
  styleUrls: ['./list-of-students.component.css'],
  providers: [ ListOfStudentServices  ,ConfigService],

})
export class ListOfStudentsComponent implements OnInit {

  student:Student
  students:Student[]=[]
  constructor(private ListOfStudentServices:ListOfStudentServices) { }

  ngOnInit(): void {
    this.showStudentsResponse()
  }

  showStudentsResponse() {

    this.ListOfStudentServices.getStudentResponse()
      .subscribe(resp => {

      this.student = resp.body
      console.log(this.student)

      });
  }

}
