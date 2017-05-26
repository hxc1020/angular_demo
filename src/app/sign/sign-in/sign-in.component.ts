import {Component, OnInit} from "@angular/core";
import {User} from "../../../shared/model/user.model";
import {SignInService} from "./sign-in.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  providers: [SignInService]
})
export class SignInComponent implements OnInit {
  user: User;
  checkPassword: string;
  data: any;

  constructor(private signInService: SignInService) {
  }

  ngOnInit() {
    this.user = {};
    this.signInService.getCustomers()
      .map(res => res.json().data as User[])
      .subscribe(data => {
        this.user = data[0];
        this.data = data;
      });
    this.checkPassword = null;
  }

}
