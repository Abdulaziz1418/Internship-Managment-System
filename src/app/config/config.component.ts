import { Component, ViewChild } from '@angular/core';
import {  ConfigService } from './config.service';
import {Student} from '../student-index/student'
import { Template } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  providers: [ ConfigService ],
  styles: ['.error {color: red;}']
})
export class ConfigComponent {
  error: any;
  headers: string[];
  Student: any;
  id:number;
  name:any;

  constructor(private configService: ConfigService) { }
      
  
  
  ngOnInit(): void {
    console.log('init ' )
  }

  clear() {
    this.Student = undefined;
    this.error = undefined;  
    this.headers = undefined;
  }

  
  showConfigResponse() {


    this.configService.getConfigResponse()
      // resp is of type `HttpResponse<Config>`
      .subscribe(resp => {
        console.log(resp.body[0])

        // display its headers
        const keys = resp.headers.keys();
        
   
        
      });
  }

  makeError() {
    this.configService.makeIntentionalError().subscribe(null, error => this.error = error );
  }
}


