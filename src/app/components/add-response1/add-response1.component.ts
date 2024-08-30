import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Form } from 'src/app/model/Form';
import { FormServiceService } from 'src/app/services/form-service.service';
import { Router } from '@angular/router'; // Import the Router from Angular Router
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-add-response1',
  templateUrl: './add-response1.component.html',
  styleUrls: ['./add-response1.component.css']
})
export class AddResponse1Component implements OnInit {
  form: Form = new Form();
  formForm!: FormGroup;
  submitted = false;
  rating = 0;
  userId: number | null = null; // Utiliser `number | null` pour gérer les valeurs nullables

  constructor(
    private formBuilder: FormBuilder, 
    private formService: FormServiceService,
    private router: Router,
    private userDataService: UserDataService
  ) {}

  ngOnInit(): void {
    this.formForm = this.formBuilder.group({
      response: ['', Validators.required]
    });

    // Récupérer l'ID de l'utilisateur et vérifier qu'il n'est pas null
    const id = this.userDataService.getUserId();
    if (id !== null) {
      this.userId = id;
      console.log('User ID:', this.userId);
    } else {
      console.error('Failed to retrieve user ID');
    }
  }

  setRating(rating: number): void {
    this.rating = rating;
    this.formForm.get('response')?.setValue(this.rating);
  }

  saveForm(): void {
    this.submitted = true;

    if (this.formForm.invalid) {
      return;
    }

    this.form.question = "Rate your overall experience";
    this.form.response = this.formForm.get('response')?.value;

    console.log('Form data before sending:', this.form);

    this.formService.addForm(this.form).subscribe({
      next: (data) => {
        console.log('Form successfully saved!', data);

        if (this.userId !== null) { // Vérifiez si userId n'est pas null
          this.formService.assignUserToForm(data.formId, this.userId).subscribe({
            next: (updatedForm) => {
              console.log('User successfully assigned to form!', updatedForm);
              this.router.navigate(['/addresponse3']);
            },
            error: (error) => {
              console.error('Error assigning user to form!', error);
            }
          });
        } else {
          console.error('User ID is null!');
        }
      },
      error: (error) => {
        console.error('Error saving form!', error);
      }
    });
  }

  onSubmit(): void {
    this.saveForm();
  }

  newForm(): void {
    this.submitted = false;
    this.form = new Form();
    this.formForm.reset();
    this.rating = 0; // Réinitialiser la note à 0
  }
}
