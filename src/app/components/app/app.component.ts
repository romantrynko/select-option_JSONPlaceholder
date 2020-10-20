import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IUser } from 'src/app/interface';
import { UserService } from './../../services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  form: FormGroup;
  users: IUser[];

  constructor(private userService: UserService) {}

    ngOnInit(): void {
      this.userService.getAllUsers().subscribe(value => this.users = value);
      this.form = new FormGroup({
        choice: new FormControl(1)
      });
    }
}
