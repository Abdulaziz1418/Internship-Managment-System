import { Component, OnInit } from '@angular/core';
import {  Card2Service } from './card2.service';
import {ConfigService} from '../config/config.service'
import {Student} from '../student-index/student'
import { from } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms'
import { FormBuilder } from '@angular/forms'
import { Validators } from '@angular/forms'
import { ControlContainer, NgForm } from '@angular/forms';
import * as _ from 'lodash';
declare var require: any
const FileSaver = require('file-saver');

@Component({
  selector: 'app-card2',
  templateUrl:'./card2.component.html',
  providers:[Card2Service,ConfigService] ,
  viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ]
  
})
export class Card2Component implements OnInit {

holder:any
students:Student[]=[]

newStudent:Student
newStudentForm
imageError: string;
    isImageSaved: boolean;
    cardImageBase64: string;
    yourModelName: string;
id

  constructor(private card2Service: Card2Service ,private fb: FormBuilder) { this.yourModelName = 'hr';}




  

  ngOnInit(): void {
   this.createForm()
    

  }
  

  // showConfigResponse() {


  //   this.StudentsService.getConfigResponse()
  //     // resp is of type `HttpResponse<Config>`
  //     .subscribe(resp => {
  //       for (let i = 0; i < resp.body.length; i++) {
          
  //         this.student.push(resp.body[i])
  //       }
  //       console.log(resp.body[0])

  //       return  this.student

  //       // this.student=  resp.body[0]
        

  //     })
  //   };

    
      
       

          
 


           fileChangeEvent(fileInput: any) {
            this.imageError = null;
            if (fileInput.target.files && fileInput.target.files[0]) {
                // Size Filter Bytes
                const max_size = 20971520;
                const allowed_types = ['application/pdf'];
    
                if (fileInput.target.files[0].size > max_size) {
                    this.imageError =
                        'Maximum size allowed is ' + max_size / 1000 + 'Mb';
    
                    return false;
                }
    
                if (!_.includes(allowed_types, fileInput.target.files[0].type)) {
                    this.imageError = 'Only PDF filesbn( PDF)';
                    return false;
                }
                console.log("fileInput" + fileInput);
                const reader = new FileReader;
                reader.onloadend = (e: any) => {
                    const file = fileInput;
                    file.src = e.target.result;
                    this.holder=reader.result
                    console.log(file.src);
                    

                    // file.onloadend = rs => {
                    //     const img_height = rs.currentTarget['height'];
                    //     const img_width = rs.currentTarget['width'];
    
                    //     console.log(img_height, img_width);
                    //         const filePath = e.target.result;
                    //         this.cardImageBase64 = filePath;
                    //         this.isImageSaved = true;
                    //         // this.PdfViewerModule = imgBase64Path;
                    //         console.log(rs)
                    //         }                      

                     };
                    reader.readAsDataURL(fileInput.target.files[0]);
                    
                    //  console.log(reader)


                };

    
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
              });
          
            }
            onSubmit(){
              this.newStudent=this.newStudentForm.value
              console.log(this.newStudent)
              this.postStudent()
            }
            postStudent() {
              this.card2Service
                .postStudentService(this.newStudent)
                .subscribe(res => {
                  console.log(res)
                })

            }


            
        }
      
    
  
    
    
  




