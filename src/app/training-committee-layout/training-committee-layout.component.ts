import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {TrainingCommitteeResolve} from './resolve.service'
@Component({
  selector: 'app-training-committee-layout',
  templateUrl: './training-committee-layout.component.html',
  styleUrls: ['./training-committee-layout.component.css']
})
export class TrainingCommitteeLayoutComponent implements OnInit {
  currentId
  constructor(private route:ActivatedRoute,private router: Router,private TrainingCommitteeResolve:TrainingCommitteeResolve) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params['id'])
    this.currentId=this.route.snapshot.params['id']
    console.log(this.currentId)
  }

}
