import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  mobile: boolean = false;


  constructor() { }

  ngOnInit(): void {
    if (window.innerWidth <= 960) {
      this.mobile = true;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    console.log(event.target.innerWidth)
    if(event.target.innerWidth <= 960) {
      this.mobile = true
    }
    else {
      this.mobile = false
    }
  }

}
