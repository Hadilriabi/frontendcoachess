import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Form } from '../model/Form';

@Injectable({
  providedIn: 'root'
})
export class FormServiceService {
  private baseUrl = 'http://localhost:8082/api/forms/';

  constructor(private http: HttpClient) { }

  addForm(form: Form): Observable<Form> {
    return this.http.post<Form>(this.baseUrl + 'addForm', form);
  }
  // Nouvelle méthode pour assigner un utilisateur à un formulaire
  assignUserToForm(formId: number, userId: number): Observable<Form> {
    return this.http.post<Form>(`${this.baseUrl}${formId}/assignUserToForm/${userId}`, {});
  }

  retrieveAllForms(): Observable<Form[]> {
    return this.http.get<Form[]>(this.baseUrl + 'retrieveAllForms');
  }
}
