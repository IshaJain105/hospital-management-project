import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DoctorAddComponent } from './doctor-add/doctor-add.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { HomeComponent } from './home/home.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';
import { PatientSearchComponent } from './patient-search/patient-search.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'doctors', component: DoctorListComponent},
  {path: 'profile', component: PatientProfileComponent},
  {path: 'create-patient', component: PatientListComponent},
  {path: 'create-doctor', component: DoctorAddComponent},
  {path: 'search/:searchTerm', component: PatientSearchComponent},
  {path: 'searchDoctor/:searchTerm', component: SearchComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
