import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpComponent } from './emp/emp.component';
import { Card2Component } from './card2/card2.component';
import { EmpAccountComponent } from './emp-account/emp-account.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { BrowseJobsComponent } from './browse-jobs/browse-jobs.component';
import { AccountsComponent } from './accounts/accounts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DocumentsComponent } from './documents/documents.component';
import { OrgHomePageComponent } from './org-home-page/org-home-page.component';
import { OrgAccountsComponent } from './org-accounts/org-accounts.component';
import { PostVacanciesComponent } from './post-vacancies/post-vacancies.component';
import { ListOfStudentsComponent } from './list-of-students/list-of-students.component';
import { TChomeComponent } from './tchome/tchome.component';
import { TCAccountComponent } from './tcaccount/tcaccount.component';
import { TCListOfStudentsComponent } from './tc-list-of-students/tc-list-of-students.component';
import { TCApproveAccountsComponent } from './tcapprove-accounts/tcapprove-accounts.component';
import { StudentLayoutComponent } from './student-layout/student-layout.component';
import { OrganizationLayoutComponent } from './organization-layout/organization-layout.component';
import { TrainingCommitteeLayoutComponent } from './training-committee-layout/training-committee-layout.component';
import { SupervisorLayoutComponent } from './supervisor-layout/supervisor-layout.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { SupListOfStudentsComponent } from './sup-list-of-students/sup-list-of-students.component';
import { SupAccountComponent } from './sup-account/sup-account.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { StudentResolve } from './accounts/resolve.service';
import { SupervisorResolve } from './sup-account/resolve.service';
import {OrganizationResolve} from './org-accounts/resolve.service'
import {TrainingCommitteeResolve} from './tcaccount/resolve.service'
import { TcStudentsDocumentsComponent } from './tc-students-documents/tc-students-documents.component';
import { TcSupervisorComponent } from './tc-supervisor/tc-supervisor.component';
import { TcSupDetailsComponent } from './tc-sup-details/tc-sup-details.component';
import { StudentsStatusComponent } from './students-status/students-status.component';
import { StudentVacanciesComponent } from './student-vacancies/student-vacancies.component';
import { GuestPageComponent } from './guest-page/guest-page.component';
import { StudentssubmissionComponent } from './studentssubmission/studentssubmission.component';


const routes: Routes = [
  {path: 'signIn', component: EmpComponent},
  {path: 'card2', component: Card2Component},
  {path: 'empAccount', component: EmpAccountComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'OrgHomePage', component: OrgHomePageComponent},
  {path: 'PostVacancies', component: PostVacanciesComponent},
  {path: 'ListOfStudents', component: ListOfStudentsComponent},
  {path: 'TChome', component: TChomeComponent},

  {
    path: 'Student/:id',
    component: StudentLayoutComponent,
    resolve: {
      Student: StudentResolve
    },
    // data: {
    children: [
      {path: '', redirectTo:'myAccount', pathMatch: 'full'},
      // {path: '**', redirectTo:'browseVacancies', pathMatch: 'full'},
      {
        path: 'myAccount', 
        component: AccountsComponent,
     
      },

        {
            path: 'browseVacancies',
            component: BrowseJobsComponent,
            data: {
                pageTitle: 'Browse Vacancies',
            },

            
          },
          {
            path:'AppliedVacancies',
            component: StudentVacanciesComponent

          },
          {
            path: 'documents', 
            component: DocumentsComponent
          },

    ]
        },
      // }

      {
        path: 'organization/:id',
        component: OrganizationLayoutComponent,
        resolve: {
          Organization: OrganizationResolve
        },
        children: [
          {path: '', redirectTo:'OrgAccount', pathMatch: 'full'},


          {
            path: 'OrgAccount',
            component: OrgAccountsComponent,
            
          },

          {
            path: 'PostVacancies', 
            component: PostVacanciesComponent,
            
          },

          {
            path: 'ListOfStudents', 
            component: ListOfStudentsComponent
          },
          {
            path: 'StudentsSubmission',
            component: StudentssubmissionComponent
          }
        ]
      },

      {
        path: 'TrainingCommittee/:id',
        component: TrainingCommitteeLayoutComponent,
        resolve: {
          TrainingCommittee: TrainingCommitteeResolve
        },
        children: [
          {path: '', redirectTo:'Account', pathMatch: 'full'},

          {
            path: 'Account', 
            component: TCAccountComponent,
            
          },
          {
            path: 'listOfStudents', 
            component: TCListOfStudentsComponent
          },
          {
            path: 'ApproveAccounts', 
            component: TCApproveAccountsComponent
          },
          {
            path: 'StudentsDocuments' ,
            component: TcStudentsDocumentsComponent
        },
        {
          path: 'Supervisors',
          component: TcSupervisorComponent
        },
        {
          path: 'Supervisors/:id',
          component: TcSupDetailsComponent
        },
        {
          path: 'StudentsStatus',
          component: StudentsStatusComponent
        }

         

        ]
      },

      {
        path: 'Supervisor/:id', 
        component: SupervisorLayoutComponent,
        resolve: {
          Supervisor: SupervisorResolve
        },
        children: [
          {path: '', redirectTo:'Account', pathMatch: 'full'},

          {
            path: 'Account',
            component: SupAccountComponent,
            
          },
          {
            path: 'listOfStudents',
            component: SupListOfStudentsComponent
          }
        ]

      },

      {
        path: 'Home',
        component: HomeLayoutComponent,
        children: [
          
          {
            path: 'WPage&login', 
            component: WelcomePageComponent
          },

          {
            path:'SignUp',
            component: CreateAccountComponent
          },
          {
            path: 'LoginAsGuest',
            component: GuestPageComponent
          }

        ]
        
      },
            {path: '**', redirectTo:'Home/WPage&login', pathMatch: 'full'},













];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [
  EmpComponent ,
   Card2Component,
   EmpAccountComponent,
   WelcomePageComponent,
  BrowseJobsComponent,
  AccountsComponent,
  DashboardComponent,
  DocumentsComponent,
  OrgHomePageComponent,
  OrgAccountsComponent
,PostVacanciesComponent,
ListOfStudentsComponent,
TChomeComponent,
TCAccountComponent,
StudentLayoutComponent,
TCListOfStudentsComponent,
TrainingCommitteeLayoutComponent,
SupListOfStudentsComponent,
SupervisorLayoutComponent,
SupAccountComponent,

]