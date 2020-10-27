import { Component, OnInit } from '@angular/core';
import {Supervisor} from '../student-index/student'
import {TcSupervisorService} from './tc-supervisor.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tc-supervisor',
  templateUrl: './tc-supervisor.component.html',
  styleUrls: ['./tc-supervisor.component.css'],
  providers:[TcSupervisorService]

})
export class TcSupervisorComponent implements OnInit {
  supervisors:Supervisor
  currentId
  constructor(private tcSupervisorService:TcSupervisorService,private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.tcSupervisorService.listSupervisorService()
    .subscribe(res=>{
      console.log(res.body)
      this.supervisors=res.body
      console.log('SSSSSSS ::',this.supervisors)
    })
  }
  details(id){
    console.log(id)
    this.currentId=this.activatedRoute.snapshot.parent.params.id

    this.router.navigate([`/TrainingCommittee/${this.currentId}/Supervisors/`,id]);

  }

}
