import { Component, OnInit } from '@angular/core';
import {ConfigService} from '../config/config.service'
import {Student} from '../student-index/student'
import { Subscription } from 'rxjs';

import {AccountsServices} from './accounts.service'
import {Token} from '../student-index/student'
import { StudentResolve } from './resolve.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css'],
  providers:[ConfigService,AccountsServices,StudentResolve]
})
export class AccountsComponent implements OnInit {
students:Student
id={}
holder
subscription:Subscription  
 token:Token

  constructor(private accountsServices:AccountsServices ,private StudentResolve:StudentResolve ,private route:ActivatedRoute) {
    
  }

  ngOnInit() {
    this.accountsServices.getStudentService(this.route.snapshot.parent.params.id)
    .subscribe(res=>{
  this.students=res.body
  
    })

  }

 

  
 
}