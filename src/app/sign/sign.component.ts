import {Component, OnInit} from '@angular/core';
import {AuthService} from '../shared/service/auth.service';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  isSigned(): Boolean {
    return this.authService.isSignedIn();
  }

}
