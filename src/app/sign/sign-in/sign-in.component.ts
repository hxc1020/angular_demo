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
  checkPassword: string;
  data: any;
  pss: any;

  constructor(private authService: AuthService,
              private router: Router,
             ) {
  }

  ngOnInit() {
    this.user = {};
    this.userForm = new FormControl('');
    /*, Validators.compose([
     Validators.required,
     // Validators.minLength(4),
     ])*/
  }

  submit() {
    this.signIn();
  }

  private signIn() {
    this.authService.login(this.user.name, this.user.password)
      .subscribe(data => {
        console.log(data);
        this.router.navigate(['/homepage']);
        console.log(1);
      }, err => {
        if (err.status === 401) {
          alert('用户名或密码不正确!');
          this.user = {};
        }
        console.log(err);
      });
  }

  isValid(): boolean{
    return this.userForm.valid;
  }
}
