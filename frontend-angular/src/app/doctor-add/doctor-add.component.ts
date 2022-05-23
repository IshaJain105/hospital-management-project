import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-doctor-add',
  templateUrl: './doctor-add.component.html',
  styleUrls: ['./doctor-add.component.css']
})
export class DoctorAddComponent implements OnInit {
  doctor: Doctor= new Doctor();

  constructor(
    private doctorService: DoctorService, 
    private router: Router ) { }

  ngOnInit(): void {

  }
  onSubmit(){
    console.log(this.doctor);
    this.saveDoctor();
  }
  saveDoctor(){
    this.doctorService.createDoctor(this.doctor).subscribe(data => {
      console.log(data);
      this.goToDoctorList();

    },
    error => console.log(error)
    );
  }
  goToDoctorList(){
    this.router.navigate(['/doctors']);
  }

}
