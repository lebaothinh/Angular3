import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { Route } from '@angular/compiler/src/core';
import { AsideleftComponent } from './asideleft/asideleft.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { ManageClassesComponent } from './manage-classes/manage-classes.component';
import { ManageMarkComponent } from './manage-mark/manage-mark.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { CommonModule } from '@angular/common';

import { ManageStudentsService } from './manage-students/manage-students.service';
import { StudentsmanagementService } from './studentsmanagement.service';

import { ManageStudentsComponent } from './manage-students/manage-students.component';
import { ManageSubjectsComponent } from './manage-subjects/manage-subjects.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { Routes,RouterModule, Router } from '@angular/router';
import { Http, HttpModule } from '@angular/http';

import { NameFilterPipe } from '../Pipe/NameFilterPipe.pipe';
import { SubjectFilterPipe } from '../Pipe/SubjectFilterPipe.pipe';
import { MarkFilterPipe } from '../Pipe/MarkFilterPipe.pipe';

const routesConfig: Routes = [
  { path: 'managestudents', component: ManageStudentsComponent },
  { path: 'managesubjects', component: ManageSubjectsComponent },
  { path: 'managemark', component: ManageMarkComponent},
  { path: 'manageclasses', component: ManageClassesComponent},
  { path: 'statistics', component: StatisticsComponent},
  { path: '', redirectTo: '/managestudents', pathMatch: 'full'},
  { path: '**', component: PagenotfoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AsideleftComponent,
    BodyComponent,
    FooterComponent,
    ManageClassesComponent,
    ManageMarkComponent,
    StatisticsComponent,
    ManageStudentsComponent,
    ManageSubjectsComponent,
    PagenotfoundComponent,
    NameFilterPipe,
    SubjectFilterPipe,
    MarkFilterPipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routesConfig),
    HttpClientModule
  ],
  providers: [StudentsmanagementService
  ],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
