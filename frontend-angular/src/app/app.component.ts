import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from './patient.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit  {
  searchTerm: String = "";


  constructor(private patientService : PatientService ,private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.patientService.getPatients()

    this.route.params.subscribe(params => {
      if (params['searchTerm'])
        this.searchTerm = params['seachTerm'];
    })
  }

  onchangeHandler($event):void {
    this.searchTerm = $event.target.value
  }

  search():void{
    if(this.searchTerm){
      this.router.navigateByUrl('/search/' + this.searchTerm); 
  }
  }
  
}
