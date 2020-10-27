import { Component, OnInit } from '@angular/core'


@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
  
})
export class WelcomePageComponent implements OnInit {
myUrlImg: string;
  constructor() { 
    this.myUrlImg = 'https://www.yamama-granite.com/file/67839075919483543328.jpg'
  }

  ngOnInit(): void {

  }
  

}
