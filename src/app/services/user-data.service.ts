import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  private readonly USER_ID_KEY = 'currentUserId'; // Clé pour stocker l'ID utilisateur

  // Méthode pour définir l'ID de l'utilisateur
  setUserId(id: number): void {
    localStorage.setItem(this.USER_ID_KEY, id.toString()); // Stocker l'ID dans le localStorage
  }

  // Méthode pour récupérer l'ID de l'utilisateur
  getUserId(): number | null {
    const userId = localStorage.getItem(this.USER_ID_KEY);
    return userId ? Number(userId) : null;
  }

  // Méthode pour supprimer l'ID de l'utilisateur (lors de la déconnexion, par exemple)
  clearUserId(): void {
    localStorage.removeItem(this.USER_ID_KEY);
  }
}
