import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {
  constructor(private router:Router) { }
  ngOnInit() {
  }
  enrutar(){
    this.router.navigate(['calculador'])
  }
}
