import { Component } from '@angular/core';
import { UserAuthService } from '../../services/user-auth.service';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private loginService: UserAuthService){}

  login(email:string, password:string){
    this.loginService.logIn(email, password);
    
  }
  logout(){
    this.loginService.logOut();
  }
}
