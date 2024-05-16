import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { UserAuthService } from '../../services/user-auth.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from '../../dialogs/dialog-box/dialog-box.component';
import { HomeDailogComponent } from '../../dialogs/home-dailog/home-dailog.component';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive,TitleCasePipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isLoggedIn: boolean = false;
  userName: string | null = null;
  constructor(private userService: UserAuthService, private dialog: MatDialog) {
    this.userService.getUser().subscribe((status) => {
      this.userName = status;
    });
    this.userService.isLogedStatus.subscribe((status) => {
      this.isLoggedIn = status;
    });
  }

  logOut() {
    this.dialog.open(DialogBoxComponent, {
      width: '300px',
      height: "200",
    })
    this.userService.logOut();
    this.isLoggedIn = this.userService.isLogIn();
  }
  openDialog() {
    if (!this.isLoggedIn) {
      this.dialog.open(HomeDailogComponent, {
        width: '300px',
        height: "200",
      });
    }
  }
}
