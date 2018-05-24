import { Component, OnInit } from '@angular/core';
import { UserService, User } from './user.service';
import { LoginComponent } from './user/login/login.component';

@Component({
  selector: 'qgo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'qgo';

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.currentUser$
      .subscribe((user: User) => {
        console.log('user : ', user);
      });
  }
}
