import { Component, OnInit } from '@angular/core';
import {Supervisor} from '../student-index/student'
import {ConfigService} from '../config/config.service'
import { Subscription } from 'rxjs';

import {SupervisorAccountsServices} from './sup-account.service'
import {Token} from '../student-index/student'
import { SupervisorResolve } from './resolve.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sup-account',
  templateUrl: './sup-account.component.html',
  styleUrls: ['./sup-account.component.css'],
  providers:[ConfigService,SupervisorAccountsServices,SupervisorResolve]

})
export class SupAccountComponent implements OnInit {
supervisor : Supervisor
token:Token
subscription:Subscription  

  constructor(private supervisorAccountsServices:SupervisorAccountsServices ,private SupervisorResolve:SupervisorResolve ,private route:ActivatedRoute) { }

  ngOnInit(): void {
    // this.route.data.subscribe(data=>{
    //   this.supervisor=data.Supervisor.body
  
    //   console.log('Supervisor    :',this.supervisor)
  
    //  })

     this.supervisorAccountsServices.getSupervisorService(this.route.snapshot.parent.params.id)
    .subscribe(res=>{
  this.supervisor=res.body
  console.log('Suppp :: ',this.supervisor)
  
    })
  }

}
