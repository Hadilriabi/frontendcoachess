import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from '../model/Appointment ';

@Injectable({
  providedIn: 'root'
})
export class AppointementService {

  private baseUrl = 'http://localhost:8082/api/appointments/'; // Modifier l'URL de base en conséquence


  constructor(private http: HttpClient) { }
  addAppointment(appointement:Appointment): Observable<Appointment> {
    return this.http.post<Appointment>(this.baseUrl + 'addAppointment',appointement);
  }

  updateAppointment(id: number, appointement: Appointment): Observable<Appointment> {
    return this.http.put<Appointment>(`${this.baseUrl}updateAppointment/${id}`, appointement);
  }

  retrieveAppointment(id: number): Observable<Appointment> {
    return this.http.get<Appointment>(this.baseUrl + 'retrieveAppointment/' + id);
  }

  removeAppointment(id: number): Observable<void> {
    return this.http.delete<void>(this.baseUrl + 'removeAppointment/' + id);
  }

  retrieveAllAppointments(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(this.baseUrl + 'retrieveAllAppointments');
  }

  approveAppointment(id: number): Observable<Appointment> {
    return this.http.post<Appointment>(this.baseUrl + `${id}/approve`, {});
  }

  assignUserToAppointment(appointmentId: number, userId: number): Observable<Appointment> {
    return this.http.post<Appointment>(`${this.baseUrl}${appointmentId}/assignUserToAppointment/${userId}`, {});
  }

}