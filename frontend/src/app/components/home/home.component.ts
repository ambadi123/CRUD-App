import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule,Validators, FormBuilder, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 

  constructor(private router: Router) { 
   
  }


  ngOnInit() {
  }
 
}


