import {FormControl, ValidatorFn} from '@angular/forms';
/**
 * Created by 林皓 on 2017/6/4 0004.
 */

export class RegisterValidators {

  static userNameUsed(use: boolean): ValidatorFn {
    return (): { [key: string]: any } => {
      if (use) {
        return {
          valid: false,
          errMsg: '该用户已被注册'
        };
      }
      return {};
    };
  }
}
