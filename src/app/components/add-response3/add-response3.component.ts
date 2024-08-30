import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Form } from 'src/app/model/Form';
import { FormServiceService } from 'src/app/services/form-service.service';
import { Router } from '@angular/router';
import { UserDataService } from 'src/app/services/user-data.service';
import { FormEnum } from 'src/app/model/FormEnum ';

@Component({
  selector: 'app-add-response3',
  templateUrl: './add-response3.component.html',
  styleUrls: ['./add-response3.component.css']
})
export class AddResponse3Component implements OnInit {
  form: Form = new Form();
  formForm!: FormGroup;
  submitted = false;
  formEnumOptions = Object.values(FormEnum);
  userId: number | null = null;

  constructor(
    private formBuilder: FormBuilder, 
    private formService: FormServiceService, 
    private router: Router, 
    private userDataService: UserDataService
  ) {}

  ngOnInit(): void {
    this.formForm = this.formBuilder.group({
      stringResponse: ['', Validators.required]
    });

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

    this.form.question = "How would you rate the quality of our products/services?";
    this.form.stringResponse = this.formForm.get('stringResponse')?.value as FormEnum;

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
              this.router.navigate(['/addresponse4']); // Redirection après assignation
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
