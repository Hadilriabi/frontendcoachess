import { Component, OnInit, ViewChild } from '@angular/core';
import { AppointementService } from 'src/app/services/appointement.service';
import dayGridPlugin from '@fullcalendar/daygrid';
import { CalendarOptions, EventInput } from '@fullcalendar/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { Appointment } from 'src/app/model/Appointment ';

@Component({
  selector: 'app-all-appointments',
  templateUrl: './all-appointments.component.html',
  styleUrls: ['./all-appointments.component.css']
})
export class AllAppointmentsComponent implements OnInit {

  appointments: Appointment[] = [];
  @ViewChild('calendar') calendarComponent!: FullCalendarComponent;

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth',
    events: [] // Initialiser comme tableau vide
  };

  constructor(private appointementService: AppointementService) { }

  ngOnInit(): void {
    this.loadAppointments();
  }

  loadAppointments(): void {
    this.appointementService.retrieveAllAppointments().subscribe({
      next: (appointments) => {
        this.appointments = appointments;
        this.updateCalendarEvents(); // Met à jour les événements dans le calendrier
      },
      error: (err) => console.error('Failed to load appointments', err)
    });
  }

  updateCalendarEvents(): void {
    const approvedAppointments: EventInput[] = this.appointments
      .filter(appointment => appointment.isApproved)
      .map(appointment => ({
        title: appointment.user ? appointment.user.username : 'Unknown User',
        start: `${appointment.date}T${appointment.startTime}`, // Combine date and time
        color: 'green' // Toutes les approbations sont en vert
      }));

    console.log('Updating calendar events:', approvedAppointments);

    if (this.calendarComponent) {
      const calendarApi = this.calendarComponent.getApi();
      calendarApi.removeAllEvents(); // Nettoyer les événements existants
      calendarApi.addEventSource(approvedAppointments); // Ajouter les nouveaux événements
    }
  }

  approveAppointment(id: number): void {
    this.appointementService.approveAppointment(id).subscribe({
      next: (appointment) => {
        console.log('Appointment approved:', appointment);
        this.addToCalendar(appointment); // Ajouter le rendez-vous au calendrier
        this.loadAppointments(); // Recharger les rendez-vous pour mettre à jour l'affichage
      },
      error: (err) => console.error('Failed to approve appointment', err)
    });
  }

  addToCalendar(appointment: Appointment): void {
    const newEvent: EventInput = {
      title: appointment.user ? appointment.user.username : 'Unknown User',
      start: `${appointment.date}T${appointment.startTime}`, // Combine date and time
      color: 'green' // L'événement approuvé est en vert
    };

    console.log('Adding event to calendar:', newEvent);

    if (this.calendarComponent) {
      const calendarApi = this.calendarComponent.getApi();
      calendarApi.addEvent(newEvent); // Ajouter l'événement directement
    }
  }
}
