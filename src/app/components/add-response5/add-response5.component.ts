import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Form } from 'src/app/model/Form';
import { FormServiceService } from 'src/app/services/form-service.service';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-add-response5',
  templateUrl: './add-response5.component.html',
  styleUrls: ['./add-response5.component.css']
})
export class AddResponse5Component implements OnInit {
  form: Form = new Form();
  formForm!: FormGroup;
  submitted = false;
  userId: number | null = null;  // Gestion de l'utilisateur

  constructor(
    private formBuilder: FormBuilder, 
    private formService: FormServiceService,
    private router: Router,
    private userDataService: UserDataService  // Injection du service UserDataService
  ) {}

  ngOnInit(): void {
    this.formForm = this.formBuilder.group({
      response: [5, Validators.required] // Set the initial value to 5
    });

    // Récupérer l'ID de l'utilisateur courant
    const id = this.userDataService.getUserId();
    if (id !== null) {
      this.userId = id;
      console.log('User ID:', this.userId);
    } else {
      console.error('Failed to retrieve user ID');
    }
  }

  saveForm(): void {
    this.submitted = true;

    if (this.formForm.invalid) {
      return;
    }

    this.form.question = "On a scale of 1 to 10, how easy is our website/app to use?";
    this.form.response = this.formForm.get('response')?.value;

    console.log('Form data before sending:', this.form);

    // Enregistrer le formulaire
    this.formService.addForm(this.form).subscribe({
      next: (data) => {
        console.log('Form successfully saved!', data);

        // Vérifier si userId est présent et assigner l'utilisateur au formulaire
        if (this.userId !== null && data.formId !== undefined) {
          this.formService.assignUserToForm(data.formId, this.userId).subscribe({
            next: () => {
              console.log('User successfully assigned to form!');
              this.router.navigate(['/addresponse2']);  // Redirection après assignation
            },
            error: (error) => {
              console.error('Error assigning user to form!', error);
            }
          });
        } else {
          console.error('User ID or Form ID is missing');
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
  }
}
