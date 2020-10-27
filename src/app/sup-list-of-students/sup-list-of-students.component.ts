import { Component, OnInit } from '@angular/core';
import {StudentReport,Supervisor} from '../student-index/student'
import {ConfigService} from '../config/config.service'
import {SupListOfStudentServices} from './sup-listOfStudents.service'
import { SupervisorResolve } from './resolve.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sup-list-of-students',
  templateUrl: './sup-list-of-students.component.html',
  styleUrls: ['./sup-list-of-students.component.css'],
  providers: [ SupListOfStudentServices  ,ConfigService,SupervisorResolve],

})
export class SupListOfStudentsComponent implements OnInit {

  StudentReport:StudentReport
  supervisor:Supervisor
  constructor(private SupListOfStudentServices:SupListOfStudentServices,private SupervisorResolve:SupervisorResolve ,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.SupListOfStudentServices.getSupervisorService(this.route.snapshot.parent.params.id)
    .subscribe(res=>{
  this.supervisor=res.body
  console.log('Suppp :: ',this.supervisor)

  

    })
    this.showStudentsResponse()
  }

  showStudentsResponse() {
    

    this.SupListOfStudentServices.getStudentResponse(this.route.snapshot.parent.params.id)
 
    .subscribe(resp => {
      this.StudentReport = resp.body
      console.log(this.StudentReport)

      });
    
  }

  showPdf(id) {
    this.SupListOfStudentServices.GetStudentReportService(id)
      .subscribe(resp => {
        if (resp.encode == "null") {
          alert("No Document")

        }
        else {
          const linkSource = 'data:application/pdf;base64,' + resp.encode;
          const downloadLink = document.createElement("a");
          const fileName = "Report.pdf";

          downloadLink.href = linkSource;
          downloadLink.download = fileName;
          downloadLink.click();
        }
        this.showStudentsResponse()
      })

  }
}
