import { Component, OnInit } from '@angular/core';
import { Student } from '../student-index/student'
import { ConfigService } from '../config/config.service'
import { TCListOfStudentServices } from './TC-ListOfStudents.service'
import { Key } from 'protractor';
import { from } from 'rxjs';
@Component({
  selector: 'app-tc-list-of-students',
  templateUrl: './tc-list-of-students.component.html',
  styleUrls: ['./tc-list-of-students.component.css'],
  providers: [TCListOfStudentServices, ConfigService],

})
export class TCListOfStudentsComponent implements OnInit {

  student: Student
  constructor(private TCListOfStudentServices: TCListOfStudentServices) { }

  ngOnInit(): void {
    this.showStudentsResponse()
  }


  showStudentsResponse() {

    this.TCListOfStudentServices.getStudentResponse()
      .subscribe(resp => {

        this.student = resp.body
        console.log(this.student)

      });
  }

  deleteStudent(id) {
    if (confirm("Are You Sure?")) {

      this.TCListOfStudentServices.deleteStudentService(id)
        .subscribe(resp => {
          console.log(resp)
          this.showStudentsResponse()
        })
    }

  }

  showPdf(id) {
    this.TCListOfStudentServices.GetStudentFIlesService(id)
      .subscribe(resp => {
        console.log("CVVVV :: ", resp.encode)
        if (resp.encode == null) {
          alert("Have not cv")

        }
        else {
          const linkSource = 'data:application/pdf;base64,' + resp.encode;
          const downloadLink = document.createElement("a");
          const fileName = "CV.pdf";

          downloadLink.href = linkSource;
          downloadLink.download = fileName;
          downloadLink.click();
        }
        this.showStudentsResponse()
      })

  }
  showRecord(id) {
    this.TCListOfStudentServices.GetStudentRecordService(id)
      .subscribe(resp => {
        console.log("Record :: ", resp.encode)
        if (resp.encode == null) {
          alert("Have not Academic Record")

        }
        else {
          const linkSource = 'data:application/pdf;base64,' + resp.encode;
          const downloadLink = document.createElement("a");
          const fileName = "Academic Record.pdf";

          downloadLink.href = linkSource;
          downloadLink.download = fileName;
          downloadLink.click();
        }
        this.showStudentsResponse()
      })

  }
  


}
