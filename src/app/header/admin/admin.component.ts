import { Component, Inject, Injectable } from "@angular/core";
import { UserService } from "../Services/user.service";
import { USER_TOKEN } from "src/app/app.module";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  providers: [UserService],
})
export class AdminComponent {
  name: string = "";
  gender: string = "Male";
  subType: string = "Yearly";
  status: string = "Active";
  constructor(@Inject(USER_TOKEN) private userService: UserService) {}
  addingUser() {
    this.userService.CreateUser(
      this.name,
      this.gender,
      this.subType,
      this.status
    );
    console.log(this.userService.users);
  }
}
