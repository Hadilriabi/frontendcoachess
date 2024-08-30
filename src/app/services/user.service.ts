import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserDTO } from '../model/UserDTO';
import { LoginResponse } from '../model/LoginResponse';
import { LoginDto } from '../model/LoginDto';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:8082/api/users'; // Modifier l'URL de base en conséquence

  constructor(private http: HttpClient) { }

  // Méthode pour enregistrer un utilisateur
  saveUser(userDTO: UserDTO): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}/save`, userDTO);
  }

  // Méthode pour connecter un utilisateur
  loginUser(loginDto: LoginDto): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.baseUrl}/login`, loginDto);
  }
}
