import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from '../../shared/model/user.model';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthService} from '../../shared/service/auth.service';
import {Validators as AppValidators} from '../../shared/form/validators';
import 'rxjs/add/operator/distinctUntilChanged';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  @Output() signUpEvent = new EventEmitter<Boolean>();
  userForm: FormGroup;
  name;
  password;
  user: User;
  checkPassword;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.user = {};
    this.checkPassword = null;
    this.name = new FormControl();
    this.password = new FormControl();
    this.checkPassword = new FormControl();
    this.userForm = new FormGroup({
      name: this.name,
      password: this.password,
      checkPassword: this.checkPassword
    }, AppValidators.match(this.password, this.checkPassword));
    this.checkUserName();
  }

  submit() {
    this.authService.signUp(this.user.name, this.user.password)
      .subscribe(data => {
          console.log(data);
          alert('注册成功！');
          this.signUpEvent.emit();
        }, err => this.handlerError(err)
      );
  }

  private handlerError(err) {
    if (err.status === 401) {
      alert('用户名或密码不正确!');
      this.user = {};
    }
    console.log(err);
  }

  cancel() {
    this.signUpEvent.emit();
  }

  checkUserName() {
    if (this.name.valid) {
      console.log(this.name);
    }
    const input = document.querySelector('input');
    Rx.Observable.fromEvent(document.querySelector('input'), 'keyup')
      .debounceTime(500)
      .distinctUntilChanged()
      .switchMap()
      .subscribe();
    this.name.valueChanges
      .debounceTime(500)
      .distinctUntilChanged()
      .switchMap(userName => this.authService.checkUserName(userName.value))
      .subscribe(rep => {
        if (rep.json().data) {
          console.log(rep.json().data);
        }
      });
  }
}
