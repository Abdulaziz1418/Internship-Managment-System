import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Login,Token} from '../student-index/student'
import {HomeLayoutService} from './home-layout.service'
import { Router, ActivatedRoute } from '@angular/router';
import { StudentResolve } from '../accounts/resolve.service';
import { ConfigService } from '../config/config.service';
import { AccountsComponent } from '../accounts/accounts.component';
import { AccountsServices } from '../accounts/accounts.service';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.css'],
  providers:[HomeLayoutService ,ConfigService,AccountsComponent,AccountsServices,StudentResolve]
})

export class HomeLayoutComponent implements OnInit {
  loginForm
  login: Login
  token:Token
  holder
  Type
  constructor(private homeLayoutService:HomeLayoutService , private router:Router , private studentResolver:StudentResolve) { }

  ngOnInit(): void {

    this.createForm()
  }
  
  createForm(){
    this.loginForm = new FormGroup({
      'id': new FormControl('', [
        Validators.required,
        // Validators.pattern(/^\d{9}$/),
      ]),
      'password': new FormControl('', [
        Validators.required,
      ])
    });

  
  }
  onSubmit(){
    this.login=this.loginForm.value
    if (this.Type == "Student"){
      console.log("Student")
      this.postStudent()

    }
    else if (this.Type == "Supervisor"){
      this.postSupervisor()
    }
    else if (this.Type == "Orgnization"){
      this.postOrgnization()
    }
    else if (this.Type == "Training Committee"){
      this.postTrainingCommittee()
    }
  }
  
  postStudent() {
    this.homeLayoutService
      .postLogintService(this.login)
      .subscribe(res => {
        this.holder=res
      this.token=this.holder
      console.log("token from postlogin service   :",this.token)
      this.studentResolver.dataSource.next(this.token.id)
      //localStorage.setItem('token', this.token.jwt);
      // localStorage.setItem('token', this.token.tokent);
      this.router.navigate(["/Student/",this.token.id]);
      


      
    })

      
  }

  postSupervisor(){
    this.homeLayoutService
      .postSupervisorLogintService(this.login)
      .subscribe(res => {
        this.holder=res
      this.token=this.holder
      console.log("token from postlogin service   :",this.token)
      this.studentResolver.dataSource.next(this.token.id)
      //localStorage.setItem('token', this.token.jwt);
      // localStorage.setItem('token', this.token.tokent);
      this.router.navigate(["/Supervisor/",this.token.id]);
      


      
    }) 
   
  }
  postOrgnization(){
    this.homeLayoutService
    .postOrgnizationLogintService(this.login)
    .subscribe(res => {
      this.holder=res
    this.token=this.holder
    console.log("token from postlogin service   :",this.token)
    this.studentResolver.dataSource.next(this.token.id)
    //localStorage.setItem('token', this.token.jwt);
    console.log('Tokennn :: ',res)
    // localStorage.setItem('token', this.token.tokent);
    this.router.navigate(["/organization/",this.token.id]);
    


    
  }) 
  }
  postTrainingCommittee(){
    this.homeLayoutService
    .postTrainingCommitteeLogintService(this.login)
    .subscribe(res => {
      this.holder=res
    this.token=this.holder
    console.log("token from postlogin service   :",this.token)
    this.studentResolver.dataSource.next(this.token.id)
    //localStorage.setItem('token', this.token.jwt);
    this.router.navigate(["/TrainingCommittee/",this.token.id]);
    

  })
}


  onChange(event){
  this.Type = event.target.value 
 
   }
  


  
}
