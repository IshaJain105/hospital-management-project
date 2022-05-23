import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Doctor } from './doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private baseURL="http://localhost:9090/api/v1/doctors";
  doctors: Doctor[];
  constructor(private httpClient: HttpClient) { }
  getDoctorsList() : Observable<Doctor[]>{
    return this.httpClient.get<Doctor[]>( `${this.baseURL}` );
  }
  createDoctor(doctor: Doctor): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, doctor);
  }
  getDoctors(){
    this.getDoctorsList().subscribe(data => {
      this.doctors=data;
    });
    return this.doctors;
  } 
}
