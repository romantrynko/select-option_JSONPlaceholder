import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IUser } from 'src/app/interface';
import { UserService } from './../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  form: FormGroup;
  users: IUser[];
  user: IUser;

  constructor(private userService: UserService, private router: Router) {}

    ngOnInit(): void {
      this.userService.getAllUsers().subscribe(value => this.users = value);
      this.form = new FormGroup({
        choice: new FormControl(1)
      });
      this.getPost(this.form);
    }

    getPost(form: FormGroup): void {
      const userId = form.controls.choice.value;
      this.router.navigate([userId]);
    }

    getUserInfo(form: FormGroup): void {
      const userId = form.controls.choice.value;
      this.user = this.users[userId - 1];
    }
}
