import { Component, OnInit } from '@angular/core';
import {User} from '../../shared/model/user.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  user: User;
  checkPassword: string;
  constructor() { }

  ngOnInit() {
    this.user = {};
    this.checkPassword = null;
  }
}
