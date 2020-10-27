import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config/config.service';
import { TrainingCommitteeAccountsServices } from './tcaccount.service';
import { TrainingCommitteeResolve } from './resolve.service'
import { ActivatedRoute } from '@angular/router';
import { TrainingCommittee, Token } from '../student-index/student'
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-tcaccount',
  templateUrl: './tcaccount.component.html',
  styleUrls: ['./tcaccount.component.css'],
  providers: [ConfigService, TrainingCommitteeAccountsServices, TrainingCommitteeResolve]

})
export class TCAccountComponent implements OnInit {
  trainingCommittee: TrainingCommittee
  token: Token
  subscription: Subscription

  constructor(private TrainingCommitteeAccountsServices: TrainingCommitteeAccountsServices, private TrainingCommitteeResolve: TrainingCommitteeResolve, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.TrainingCommitteeAccountsServices.getStudentService(this.route.snapshot.parent.params.id)
      .subscribe(res => {
        this.trainingCommittee = res.body

      })

  }

}
