import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';


@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.css']
})
export class PatientProfileComponent implements OnInit {
 
  patients: Patient[];
  searchText:any;

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.getPatients();
  }
  private getPatients(){
    this.patientService.getPatientsList().subscribe(data => {
      this.patients=data;
    });
  } 
  

}
