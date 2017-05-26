import { Component, OnInit } from '@angular/core';
import {CarouselConfig} from 'ngx-bootstrap';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers: [{provide: CarouselConfig, useValue: {interval: 5000, noPause: true}}]
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
