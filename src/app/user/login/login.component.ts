import { Component, OnInit } from '@angular/core';
import { UserService, User, LoginInput } from '../../user.service';

@Component({
  selector: 'qgo-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    let input = {
      email: 'taskmanagerqgo@yopmai.com',
      password: 'mot2passe' 
    } as LoginInput;

    this.userService.login(input)
      .subscribe((user: User) => {
        console.log(user.token);
      });
  }

}

