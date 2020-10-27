import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config/config.service';
import { OrgAccountsServices } from './org-account.service';
import { OrganizationResolve } from './resolve.service';
import { ActivatedRoute } from '@angular/router';
import {Token,Organization} from '../student-index/student'
import { Subscription } from 'rxjs';
import {PostVacanciesService} from '../post-vacancies/postvacncies.service'
@Component({
  selector: 'app-org-accounts',
  templateUrl: './org-accounts.component.html',
  styleUrls: ['./org-accounts.component.css'],
  providers:[ConfigService,OrgAccountsServices,OrganizationResolve]

})
export class OrgAccountsComponent implements OnInit {
  organization:Organization
  token: Token
  subscription:Subscription  

  constructor(private OrgAccountsServices:OrgAccountsServices ,private OrganizationResolve:OrganizationResolve ,private route:ActivatedRoute) { }

  ngOnInit(): void {
   
     this.OrgAccountsServices.getOrganizationService(this.route.snapshot.parent.params.id)
    .subscribe(res=>{
  this.organization=res.body
  console.log(this.organization)
  
    })

     
  }

  ID(){
   return this.route.snapshot.params['id']
  }

}
