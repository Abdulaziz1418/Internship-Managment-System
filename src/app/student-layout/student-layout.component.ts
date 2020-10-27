import { Component, OnInit } from '@angular/core';
import { AccountsServices } from '../accounts/accounts.service';
import {StudentResolve} from './resolve.service'
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-student-layout',
  templateUrl: './student-layout.component.html',
  styleUrls: ['./student-layout.component.css']
})
export class StudentLayoutComponent implements OnInit {
currentId
  constructor(private accountsServices:AccountsServices ,private studentResolve:StudentResolve ,
    private route:ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    
    console.log(this.route.snapshot.params['id'])
    this.currentId=this.route.snapshot.params['id']
    console.log(this.currentId)
  }

}