import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
@Component({
  selector: 'app-patient-search',
  templateUrl: './patient-search.component.html',
  styleUrls: ['./patient-search.component.css']
})
export class PatientSearchComponent implements OnInit {
  patients: Patient[] = [];

  constructor(private patientService: PatientService ,  private route: ActivatedRoute) { }

  ngOnInit(): void {


    this.route.params.subscribe(params => {
      console.log(this.patients)
      if (params['searchTerm'] && !this.patientService.patients) {
        this.patientService.getPatients()
        setTimeout(() => {
          this.patients = this.patientService.patients.filter(patient  =>
            patient.id==params['searchTerm']);
        }, 2000);
      } else {
        this.patients = this.patientService.patients.filter(patient  =>
          patient.id==params['searchTerm']);
      }

      
      if (this.patientService.patients && this.patients.length === 0) {
        alert("Patient Not Found!")
      }
  })
  }

}
