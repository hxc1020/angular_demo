import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from '../../shared/model/user.model';
import {FormControl, FormGroup, ValidatorFn} from '@angular/forms';
import {AuthService} from '../../shared/service/auth.service';
import {Validators as AppValidators} from '../../shared/form/validators';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';
import {Subject} from 'rxjs/Subject';

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
  notUse;
  private userNameStream = new Subject<string>();

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.userNameStream
      .debounceTime(500)
      .distinctUntilChanged()
      .map(userName => this.authService.checkUserName(userName))
      .map(sub => {
        sub.subscribe(reps => this.notUse = reps.json().data);
        return this.notUse;
      }).subscribe();
    this.user = {};
    this.checkPassword = null;
    // this.name = new FormControl('', this.userNameUsed);
    this.name = new FormControl('');
    this.password = new FormControl();
    this.checkPassword = new FormControl();
    this.userForm = new FormGroup({
      name: this.name,
      password: this.password,
      checkPassword: this.checkPassword
    }, AppValidators.match(this.password, this.checkPassword));
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

  checkUserName(name: string) {
    if (this.name.valid) {
      this.userNameStream.next(name);
    }
  }

  userNameUsed(nameForm: FormControl): ValidatorFn {
    this.checkUserName(nameForm.value);
    return (): { [key: string]: any } => {
      if (this.notUse) {
        return {
          valid: false,
          errMsg: '该用户已被注册'
        };
      }
      return {};
    };
  }
}
