import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Needs } from 'src/app/model/Needs';
import { NeedsServiceService } from 'src/app/services/needs-service.service';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-add-needs',
  templateUrl: './add-needs.component.html',
  styleUrls: ['./add-needs.component.css']
})
export class AddNeedsComponent implements OnInit {

  needs: Needs = new Needs();
  needsForm!: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private needsService: NeedsServiceService,
    private userDataService: UserDataService
  ) {}

  ngOnInit(): void {
    this.needsForm = this.formBuilder.group({
      ListOfNeeds: ['', Validators.required],
    });

    const userId = this.userDataService.getUserId();
    console.log('User ID:', userId);
  }

  saveNeeds(): void {
    this.submitted = true;

    if (this.needsForm.invalid) {
      return;
    }

    // Assigner la valeur du formulaire à l'objet Needs
    this.needs.listOfNeeds = this.needsForm.get('ListOfNeeds')?.value;

    console.log('Form Values:', this.needsForm.value);
    console.log('Needs before sending:', this.needs);

    // Créer le besoin
    this.needsService.addNeeds(this.needs)
      .subscribe(
        response => {
          console.log('Needs created:', response);

          // Vérifier si la réponse contient un ID valide
          if (response && response.needsId) {
            const needsId = response.needsId;
            const userId = this.userDataService.getUserId();

            // Vérifier si userId n'est pas null avant d'appeler assignUserToNeeds
            if (userId !== null) {
              this.assignUserToNeeds(needsId, userId);
            } else {
              console.error('User ID is null. Cannot assign user to needs.');
            }
          } else {
            console.error('Invalid Needs ID returned from the server.');
          }
        },
        error => {
          console.error('Error creating needs:', error);
        });
  }

  assignUserToNeeds(needsId: number, userId: number): void {
    this.needsService.assignUserToNeeds(needsId, userId)
      .subscribe(
        response => {
          console.log('User assigned to Needs:', response);
        },
        error => {
          console.error('Error assigning user to needs:', error);
        }
      );
  }

  onSubmit(): void {
    this.saveNeeds();
  }

  newNeeds(): void {
    this.submitted = false;
    this.needs = new Needs();
    this.needsForm.reset();
  }
}
