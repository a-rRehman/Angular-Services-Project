import { Component, Inject } from "@angular/core";
import { UserService } from "../../Services/user.service";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  // providers: [UserService],
})
export class UserListComponent {
  constructor(private userService: UserService) {}
  userList = this.userService.getAllUsers();
}