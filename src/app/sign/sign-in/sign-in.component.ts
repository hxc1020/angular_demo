import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from '../../shared/model/user.model';
import {AuthService} from '../../shared/service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  providers: [AuthService]
})
export class SignInComponent implements OnInit {
  @Output() signedEvent = new EventEmitter<Boolean>();
  user: User;
  checkPassword: string;
  data: any;
  pss: any;

  constructor(private authService: AuthService,
              private router: Router,
             ) {
  }

  ngOnInit() {
    this.user = {};
  }

  submit() {
    this.authService.login(this.user.name, this.user.password)
      .subscribe(data => {
        console.log(data);
        this.router.navigate(['/homepage']);
        console.log(1);
      }, error2 => console.log(error2));
  }
}
