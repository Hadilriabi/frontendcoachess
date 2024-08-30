import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/model/Appointment ';
import { AppointementService } from 'src/app/services/appointement.service';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {

  appointments: Appointment[] = [];

  constructor(private appointmentService: AppointementService) { }

  ngOnInit(): void {
    this.getAllAppointments();
  }

  getAllAppointments(): void {
    this.appointmentService.retrieveAllAppointments().subscribe(
      (data: Appointment[]) => {
        this.appointments = data;
      },
      error => {
        console.error('Error fetching appointments', error);
      }
    );
  }

  approveAppointment(id: number): void {
    this.appointmentService.approveAppointment(id).subscribe(
      (updatedAppointment: Appointment) => {
        console.log('Appointment approved', updatedAppointment);
        // Optionally, refresh the appointment list or update the UI accordingly
      },
      error => {
        console.error('Error approving appointment', error);
      }
    );
  }

}
