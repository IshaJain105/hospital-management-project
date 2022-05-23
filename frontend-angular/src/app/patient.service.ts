import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  patients: Patient[];
  private baseURL="http://localhost:9090/api/v1/patients";

  constructor(private httpClient: HttpClient) { }
    
  getPatientsList() : Observable<Patient[]>{
    return this.httpClient.get<Patient[]>( `${this.baseURL}` );
  }

  createPatient(patient: Patient): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, patient);
  }
  getPatients(){
    this.getPatientsList().subscribe(data => {
      // console.log("PATIENT DATA => ",data)
      this.patients=data;
  });
  return this.patients;
  }
}
