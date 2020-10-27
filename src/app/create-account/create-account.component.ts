import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import {Student,Supervisor,Organization,TrainingCommittee} from '../student-index/student'
import {CreateAccountService} from './createAccount.service'
import { ConfigService } from '../config/config.service';
import * as _ from 'lodash';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

declare var require: any
const FileSaver = require('file-saver');

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css'],
  providers:[CreateAccountService ,ConfigService]
})
export class CreateAccountComponent implements OnInit {
  Type
div
imageError: string;
  holder: string | ArrayBuffer;

  constructor(private createAccountService: CreateAccountService ,private http: HttpClient,private configService:ConfigService) { }
  newStudentForm 
  newStudent: Student
  newSupervisorForm
  newSupervisor: Supervisor
  newOrganizationForm
  newOrganization: Organization
  newTrainingCommitteeForm
  newTrainingCommittee: TrainingCommittee
  filesToUpload: Array<File> = [];
  ngOnInit(): void {
    this.createForm()
  }
  createForm(){
    this.newStudentForm = new FormGroup({
      'id': new FormControl('', [
        Validators.required,
        Validators.pattern(/^\d{9}$/),
      ]),
      'name': new FormControl('', [
        Validators.required,
        Validators.pattern("^[a-zA-Z ]*$"),
        Validators.minLength(2),
      ]),
      'gpa': new FormControl('', [
        Validators.required,
        Validators.pattern(/^\d\.\d{2}$|^\d$/),
        Validators.max(5),
        Validators.min(0),
      ]),
      'email': new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      'password': new FormControl('', [
        Validators.required,
      ]),
      'cv': new FormControl('', [
      ]),
      'academicRecord': new FormControl('', [
      ])
    });

    this.newSupervisorForm = new FormGroup({
      'id': new FormControl('', [
        Validators.required,
        Validators.pattern(/^\d{9}$/),
      ]),
      'name': new FormControl('', [
        Validators.required,
        Validators.pattern("^[a-zA-Z ]*$"),
        Validators.minLength(2),
      ]),
      
      'email': new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      'password': new FormControl('', [
        Validators.required,
      ])
    });
    this.newOrganizationForm = new FormGroup({
     
      'name': new FormControl('', [
        Validators.required,
        Validators.pattern("^[a-zA-Z ]*$"),
        Validators.minLength(2),
      ]),
      
      'email': new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      'information': new FormControl('', [
        Validators.required,
      ]),
      'password': new FormControl('', [
        Validators.required,
      ])
    });

    this.newTrainingCommitteeForm = new FormGroup({
      'id': new FormControl('', [
        Validators.required,
        Validators.pattern(/^\d{9}$/),
      ]),
      'name': new FormControl('', [
        Validators.required,
        Validators.pattern("^[a-zA-Z ]*$"),
        Validators.minLength(2),
      ]),
      
      'email': new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      'password': new FormControl('', [
        Validators.required,
      ])
    });

  }
  onSubmit(){
    this.newStudent=this.newStudentForm.value
    this.newSupervisor=this.newSupervisorForm.value
    this.newOrganization = this.newOrganizationForm.value
    this.newTrainingCommittee = this.newTrainingCommitteeForm.value

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
    this.createAccountService
      .postStudentService(this.newStudent)
      .subscribe(res => {

        console.log(res)
      })


  }
  postSupervisor(){
    this.createAccountService
      .postSupervisorService(this.newSupervisor)
      .subscribe(res => {
        console.log(res)
      })
      
  }
  postOrgnization(){
    this.createAccountService
    .postOrgnizationService(this.newOrganization)
    .subscribe(res => {
      console.log(res)
    })
  }
  postTrainingCommittee(){
    this.createAccountService
    .postTrainingCommitteeService(this.newTrainingCommittee)
    .subscribe(res => {
      console.log(res)
    })

  }
  onChange(event){
    this.Type = event.target.value 
    console.log(event.target.value)
   
     }
     upload() {
       
      const formData: any = new FormData();
      const files: Array<File> = this.filesToUpload;
      console.log(files);
  
      for(let i =0; i < files.length; i++){
          formData.append("uploads[]", files[i], files[i]['name']);
      }
      console.log('form data variable :   '+ formData.toString());
      this.http.post('http://localhost:4000/upload', formData)
          .subscribe(files => console.log('files', files))
  }
  
  fileChangeEvent(fileInput: any) {
    
      this.filesToUpload = <Array<File>>fileInput.target.files;
      //this.product.photo = fileInput.target.files[0]['name'];
  }
  

  
}
  // onSubmit() {
  //   alert("Thank you, your request send to the admin wait for approve.")
  // }

