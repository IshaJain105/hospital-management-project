import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  doctors: Doctor[];
  doctor: Doctor;
  constructor(private doctorService: DoctorService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.route.params.subscribe(params => {
      this.doctors = this.doctorService.getDoctors().filter(doctor =>
        doctor.name.includes(params['searchTerm']));
      if (this.doctors.length == 0) {
        alert("Doctor Not Found!")
      }
  })
    
  }
  


  
}
