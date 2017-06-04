import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from '../../shared/model/user.model';
import {AuthService} from '../../shared/service/auth.service';
import {Router} from '@angular/router';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  providers: [AuthService]
})
export class SignInComponent implements OnInit {
  @Output() signedEvent = new EventEmitter<Boolean>();
  userForm: FormControl;
  user: User;
  pss: any;

  constructor(private authService: AuthService,
              private router: Router,
             ) {
  }

  ngOnInit() {
    this.user = {};
    this.userForm = new FormControl('');
  }

  submit() {
    this.signIn();
  }

  private signIn() {
    this.authService.signIn(this.user.name, this.user.password)
      .subscribe(data => {
        console.log(data);
        this.router.navigate(['/homepage']);
        this.signedEvent.emit();
      }, err => {
        if (err.status === 401) {
          alert('用户名或密码不正确!');
          this.user = {};
        }
        console.log(err);
      });
  }
  cancel(){
    this.signedEvent.emit();
  }
}
