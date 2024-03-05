import { Component, Inject } from "@angular/core";
import { UserService } from "../../Services/user.service";
import { USER_TOKEN } from "src/app/app.module";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  // providers: [UserService],
})
export class UserListComponent {
  constructor(@Inject(USER_TOKEN) private userService: UserService) {}
  userList = this.userService.getAllUsers();
}
