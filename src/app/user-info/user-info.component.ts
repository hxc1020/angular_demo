import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from '../shared/service/auth.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css'],
  providers: [AuthService]
})
export class UserInfoComponent implements OnInit {

  @Input() name;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  logOut(){
    this.authService.logout();
  }
}
