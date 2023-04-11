import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../services/localStorage.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
   
    constructor(private router:Router, private localStorageService: LocalStorageService){}
    
     ngOnInit(): void {
      this.router.navigateByUrl('/main');
    }

  userUid = this.localStorageService.getItem('userUid');


}
