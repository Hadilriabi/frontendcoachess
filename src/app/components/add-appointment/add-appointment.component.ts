import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Appointment } from 'src/app/model/Appointment ';
import { AppointementService } from 'src/app/services/appointement.service';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})
export class AddAppointmentComponent implements OnInit {

  appointment: Appointment = new Appointment();
  appointmentForm!: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private appointementService: AppointementService,
    private userDataService: UserDataService
  ) {}

  ngOnInit(): void {
    this.appointmentForm = this.formBuilder.group({
      date: ['', Validators.required],
      startTime: ['', Validators.required],
    });

    const userId = this.userDataService.getUserId();
    console.log('User ID:', userId);
  }

  saveappointment(): void {
    this.submitted = true;

    if (this.appointmentForm.invalid) {
      return;
    }

    // Assigner la valeur du formulaire à l'objet appointment
    this.appointment.date = this.appointmentForm.get('date')?.value;
    this.appointment.startTime=this.appointmentForm.get('startTime')?.value;
    this.appointment.isApproved= false;

    console.log('appointment Values:', this.appointmentForm.value);
    console.log('appointment before sending:', this.appointment);

    // Créer  appointment
    this.appointementService.addAppointment(this.appointment)
      .subscribe(
        response => {
          console.log('appointment created:', response);

          // Vérifier si la réponse contient un ID valide
          if (response && response.id) {
            const appointmentId = response.id;
            const userId = this.userDataService.getUserId();

            // Vérifier si userId n'est pas null avant d'appeler assignUserToNeeds
            if (userId !== null) {
              this.assignUserToNeeds(appointmentId, userId);
            } else {
              console.error('User ID is null. Cannot assign user to appointment.');
            }
          } else {
            console.error('Invalid appointment ID returned from the server.');
          }
        },
        error => {
          console.error('Error creating appointment:', error);
        });
  }

  assignUserToNeeds(appointmentId: number, userId: number): void {
    this.appointementService.assignUserToAppointment(appointmentId, userId)
      .subscribe(
        response => {
          console.log('User assigned to appointment:', response);
        },
        error => {
          console.error('Error assigning user to appointment:', error);
        }
      );
  }

  onSubmit(): void {
    this.saveappointment();
  }

  newappointment(): void {
    this.submitted = false;
    this.appointment = new Appointment();
    this.appointmentForm.reset();
  }
}

