import { Component, OnInit } from '@angular/core';
import { TCApproveAccountsServices } from './tcapprove-accounts.service';
import { ConfigService } from '../config/config.service';
import { Student, Organization, Supervisor } from '../student-index/student'
@Component({
  selector: 'app-tcapprove-accounts',
  templateUrl: './tcapprove-accounts.component.html',
  styleUrls: ['./tcapprove-accounts.component.css'],
  providers: [TCApproveAccountsServices, ConfigService],

})
export class TCApproveAccountsComponent implements OnInit {

  constructor(private TCApproveAccountsServices: TCApproveAccountsServices) { }
  student: Student
  organization: Organization
  supervisor: Supervisor
  ngOnInit(): void {
    this.showStudentsResponse()
    this.showOrgsResponse()
    this.showSupResponse()
  }


  showStudentsResponse() {

    this.TCApproveAccountsServices.getStudentResponse()
      .subscribe(resp => {

        this.student = resp.body
        console.log(this.student)

      });
  }

  showOrgsResponse() {
    this.TCApproveAccountsServices.getOrgsResponse()
      .subscribe(resp => {

        this.organization = resp.body
        console.log(this.organization)

      });
  }
  showSupResponse() {
    this.TCApproveAccountsServices.getSupResponse()
      .subscribe(resp => {

        this.supervisor = resp.body
        console.log(this.supervisor)

      });
  }

  deleteStudent(id) {
    if (confirm("Are You Sure?")) {

      this.TCApproveAccountsServices.deleteStudentService(id)
        .subscribe(resp => {
          console.log(resp)
          this.showStudentsResponse()
          this.showOrgsResponse()
          this.showSupResponse()
        })
    }

  }
  deleteSupervisor(id) {
    if (confirm("Are You Sure?")) {

      this.TCApproveAccountsServices.deleteSupervisorService(id)
        .subscribe(resp => {
          console.log(resp)
          this.showStudentsResponse()
          this.showOrgsResponse()
          this.showSupResponse()
        })
    }

  }
  deleteOrgs(id) {
    if (confirm("Are You Sure?")) {

      this.TCApproveAccountsServices.deleteOrgsService(id)
        .subscribe(resp => {
          console.log(resp)
          this.showStudentsResponse()
          this.showOrgsResponse()
          this.showSupResponse()
        })
    }

  }
  approve(id) {
    if (confirm("Are You Sure?")) {

      this.TCApproveAccountsServices.approveStudentService(id)
        .subscribe(res => {
          console.log(res)
          this.showStudentsResponse()
          this.showOrgsResponse()
          this.showSupResponse()
        })
      console.log(id)
    }
  }

  approveOrgs(id) {
    if (confirm("Are You Sure?")) {

      this.TCApproveAccountsServices.approveOrgsService(id)
        .subscribe(res => {
          console.log(res)
          this.showStudentsResponse()
          this.showOrgsResponse()
          this.showSupResponse()
        })
      console.log(id)
    }
  }

  approveSup(id) {
    if (confirm("Are You Sure?")) {

      this.TCApproveAccountsServices.approveSupService(id)
        .subscribe(res => {
          console.log(res)
          this.showStudentsResponse()
          this.showOrgsResponse()
          this.showSupResponse()

        })
      console.log(id)
    }
  }
}



