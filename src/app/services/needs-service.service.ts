import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Needs } from '../model/Needs';

@Injectable({
  providedIn: 'root'
})
export class NeedsServiceService {

  private baseUrl = 'http://localhost:8082/api/needs/'; // Modifier l'URL de base en conséquence


  constructor(private http: HttpClient) { }
  addNeeds(needs :Needs): Observable<Needs> {
    return this.http.post<Needs>(this.baseUrl + 'addNeeds',needs);
  }

  updateNeeds(id: number, needs: Needs): Observable<Needs> {
    return this.http.put<Needs>(`${this.baseUrl}updateNeeds/${id}`, needs);
  }

  retrieveNeeds(id: number): Observable<Needs> {
    return this.http.get<Needs>(this.baseUrl + 'retrieveNeeds/' + id);
  }

  removeNeeds(id: number): Observable<void> {
    return this.http.delete<void>(this.baseUrl + 'removeNeeds/' + id);
  }

  retrieveAllNeeds(): Observable<Needs[]> {
    return this.http.get<Needs[]>(this.baseUrl + 'retrieveAllNeeds');
  }

  // Nouvelle méthode pour assigner un utilisateur à un besoin spécifique
  assignUserToNeeds(needsId: number, userId: number): Observable<Needs> {
    return this.http.post<Needs>(`${this.baseUrl}${needsId}/assignUserToNeeds/${userId}`, {});
  }

}
