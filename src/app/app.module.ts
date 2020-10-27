import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { Card2Component } from './card2/card2.component';
import { StudentIndexComponent } from './student-index/student-index.component';
import { ConfigComponent } from './config/config.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
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
import { TcStudentsDocumentsComponent } from './tc-students-documents/tc-students-documents.component';
import { TcSupervisorComponent } from './tc-supervisor/tc-supervisor.component';
import { TcSupDetailsComponent } from './tc-sup-details/tc-sup-details.component';
import { StudentsStatusComponent } from './students-status/students-status.component';
import { StudentVacanciesComponent } from './student-vacancies/student-vacancies.component';
import { GuestPageComponent } from './guest-page/guest-page.component';
import { StudentssubmissionComponent } from './studentssubmission/studentssubmission.component';
import { TokenInterceptor } from './home-layout/interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    HeaderComponent,
    CardComponent,
    Card2Component,
    StudentIndexComponent,
    ConfigComponent,
    EmpAccountComponent,
    WelcomePageComponent,
    BrowseJobsComponent,
    AccountsComponent,
    DashboardComponent,
    DocumentsComponent,
    OrgHomePageComponent,
    OrgAccountsComponent,
    PostVacanciesComponent,
    ListOfStudentsComponent,
    TChomeComponent,
    TCAccountComponent,
    TCListOfStudentsComponent,
    TCApproveAccountsComponent,
    StudentLayoutComponent,
    OrganizationLayoutComponent,
    TrainingCommitteeLayoutComponent,
    SupervisorLayoutComponent,
    HomeLayoutComponent,
    SupListOfStudentsComponent,
    SupAccountComponent,
    CreateAccountComponent,
    TcStudentsDocumentsComponent,
    TcSupervisorComponent,
    TcSupDetailsComponent,
    StudentsStatusComponent,
    StudentVacanciesComponent,
    GuestPageComponent,
    StudentssubmissionComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule, 
    

  ],
  providers: [],
  bootstrap: [AppComponent],
  

})
export class AppModule { }
