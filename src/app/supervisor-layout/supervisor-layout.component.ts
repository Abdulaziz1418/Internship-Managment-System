import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {SupervisorResolve} from './resolve.service'
@Component({
  selector: 'app-supervisor-layout',
  templateUrl: './supervisor-layout.component.html',
  styleUrls: ['./supervisor-layout.component.css']
})
export class SupervisorLayoutComponent implements OnInit {
  currentId
  constructor(private SupervisorResolve:SupervisorResolve ,
    private route:ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params['id'])
    this.currentId=this.route.snapshot.params['id']
    console.log(this.currentId)
  }

}
