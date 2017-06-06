import {AbstractControl, FormControl, ValidatorFn} from '@angular/forms';
/**
 * Created by 林皓 on 2017/6/4 0004.
 */
export class RegisterValidators {
  static EMAIL_REG = new RegExp('\\w[-\\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}');
  // static PASS_REG = new RegExp('(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{8,30}');
  static PASS_REG = new RegExp('^(?![a-zA-z]+$)(?!\\d+$)(?![!@#$%^&*]+$)[a-zA-Z\\d!@#$%^&*]+$');

  static email(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!RegisterValidators.EMAIL_REG.test(control.value)) {
        return {
          unmatched: true,
          errMsg: '请输入正确的邮箱地址'
        };
      }
      return {};
    };
  }


  static password(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!RegisterValidators.PASS_REG.test(control.value)) {
        return {
          unmatched: true,
          errMsg: '密码中至少包含数字和字符'
        };
      } else if (control.value.length < 8 || control.value.length > 20) {
        return {
          unmatched: true,
          errMsg: '请输入8-20位密码'
        };
      }
      return {};
    };
  }

  static match(passForm: FormControl): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (control.value !== passForm.value) {
        return {
          unmatched: true,
          errMsg: '2次输入不同'
        };
      }
      return {};
    };
  }
}
