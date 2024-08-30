import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserDTO } from 'src/app/model/UserDTO';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent { userDTO: UserDTO = { username: '', email: '', password: '' };
errorMessage: string = '';

constructor(private userService: UserService, private router: Router) {}

onSubmit(): void {
  this.userService.saveUser(this.userDTO).subscribe(
    (response: string) => {
      if (response && response !== '') {
        console.log('Réponse du serveur:', response);
        this.router.navigate(['/login']);
      } else {
        this.errorMessage = 'Une erreur s\'est produite lors de l\'inscription';
      }
    },
    (error) => {
      console.error('Erreur d\'inscription:', error);
      this.errorMessage = 'Une erreur s\'est produite lors de l\'inscription';
    }
  );
}

}
