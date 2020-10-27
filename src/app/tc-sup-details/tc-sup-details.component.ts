import { Component, OnInit } from '@angular/core';
import { TcSupDetailsService } from './tc-sup-details.service'
import { Supervisor, Student, StudentWithSupervisor } from '../student-index/student'
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-tc-sup-details',
  templateUrl: './tc-sup-details.component.html',
  styleUrls: ['./tc-sup-details.component.css'],
  providers: [TcSupDetailsService]

})
export class TcSupDetailsComponent implements OnInit {
  supervisor: Supervisor
  students: Student
  student: Student
  StudentWithSupervisor: StudentWithSupervisor
  id
  user
  theCheckbox = false
  isChecked;
  isCheckedName;
  constructor(private tcSupDetailsService: TcSupDetailsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.getSupervisor()
    this.studentNoOrgs()
    this.studentWithSupervisor()

  }
  getSupervisor() {
    this.tcSupDetailsService.getSupervisorService(this.activatedRoute.snapshot.params.id)
      .subscribe(res => {
        this.supervisor = res.body
      })

  }
  studentNoOrgs() {
    this.tcSupDetailsService.listStudentNoOrgs()
      .subscribe(res => {
        this.students = res.body
      })
  }
  studentWithSupervisor() {
    this.tcSupDetailsService.getStudentSupervisorService(this.activatedRoute.snapshot.params.id)
      .subscribe(res => {
        this.StudentWithSupervisor = res.body
        console.log(this.StudentWithSupervisor)
      })
  }

  ckecked(id, event) {
    console.log(id)
    this.theCheckbox = event.target.checked
    this.isChecked = !this.isChecked;
    this.isCheckedName = event.target.name;
    this.id = id
    this.user = {
      id: this.id,
      supervisor_id: this.activatedRoute.snapshot.params.id
    }



  }
  submit() {
    this.student = this.user
    console.log(this.student)

    this.tcSupDetailsService.postStudentToSupervisorService(this.student)
      .subscribe(res => {
        console.log(res)
      })
    this.getSupervisor()
    this.studentNoOrgs()
    this.studentWithSupervisor()
  }

}


