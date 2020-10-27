import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {OrganizationResolve} from './resolve.service'
@Component({
  selector: 'app-organization-layout',
  templateUrl: './organization-layout.component.html',
  styleUrls: ['./organization-layout.component.css']
})
export class OrganizationLayoutComponent implements OnInit {
  currentId
  constructor(private OrganizationResolve:OrganizationResolve ,
    private route:ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params['id'])
    this.currentId=this.route.snapshot.params['id']
    console.log(this.currentId)
  }

}
