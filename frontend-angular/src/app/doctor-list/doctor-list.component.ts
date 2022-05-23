import { Component, OnInit } from '@angular/core';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {
  doctors: Doctor[];
  searchText:any;
  searchTerm: String = "";
  constructor(private doctorService: DoctorService) { }
  id: number;
  ngOnInit(): void {
    this.getDoctors();
  }
  private getDoctors(){
    this.doctorService.getDoctorsList().subscribe(data => {
      this.doctors=data;
    });
  } 
}
