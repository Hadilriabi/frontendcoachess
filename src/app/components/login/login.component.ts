import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginDto } from 'src/app/model/LoginDto';
import { LoginResponse } from 'src/app/model/LoginResponse';
import { UserDataService } from 'src/app/services/user-data.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {loginDto: LoginDto = { email: '', password: '' };
errorMessage: string = '';

constructor(private userService: UserService, private router: Router, private userDataService: UserDataService ) {}

onSubmit(): void {
  this.userService.loginUser(this.loginDto).subscribe(
    (response: LoginResponse) => {
      if (response.status) {
         // Stocker l'ID de l'utilisateur
         this.userDataService.setUserId(response.userId);

       
        
        // Rediriger vers la page d'accueil après connexion réussie
        this.router.navigate(['/home']);
      } else {
        this.errorMessage = response.message;
      }
    },
    (error) => {
      this.errorMessage = 'Une erreur s\'est produite lors de la connexion';
    }
  );
}
}