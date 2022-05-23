import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { PatientSearchComponent } from './patient-search/patient-search.component';
import { DoctorAddComponent } from './doctor-add/doctor-add.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
@NgModule({
  declarations: [
    AppComponent,
    DoctorListComponent,
    PatientListComponent,
    PatientProfileComponent,
    HomeComponent,
    SearchComponent,
    PatientSearchComponent,
    DoctorAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
