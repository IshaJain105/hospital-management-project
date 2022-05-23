import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  doctors: Doctor[];
  patient: Patient= new Patient();
  myDoc:any;
  constructor(private patientService: PatientService, 
    private doctorService: DoctorService, 
    private router: Router ) { }

  ngOnInit(): void {
    this.getDoctors();
  }
  savePatient(){
    this.patientService.createPatient(this.patient).subscribe(data => {
      console.log(data);
      this.goToPatientList();

    },
    error => console.log(error)
    );
  }
  goToPatientList(){
    this.router.navigate(['/profile']);
  }
  onSubmit(){
    console.log(this.patient);
    this.savePatient();
  }
  private getDoctors(){
    this.doctorService.getDoctorsList().subscribe(data => {
      this.doctors=data;
    });
  }
  

}
