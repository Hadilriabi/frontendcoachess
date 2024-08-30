import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cmtr } from '../model/Cmtr';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private baseUrl = 'http://localhost:8082/api/comments/'; // Modifier l'URL de base en conséquence


  constructor(private http: HttpClient) { }
  addComment(cmtr:Cmtr): Observable<Cmtr> {
    return this.http.post<Cmtr>(this.baseUrl + 'addComment',cmtr);
  }

  retrieveAllComments(): Observable<Cmtr[]> {
    return this.http.get<Cmtr[]>(this.baseUrl + 'retrieveAllComments');
  }

   // Nouvelle méthode pour ajouter un commentaire et l'affecter à un post
   addCommentEtAffecterAPost(cmtr: Cmtr, postId: number): Observable<Cmtr> {
    return this.http.post<Cmtr>(`${this.baseUrl}addCommentToPost/${postId}`, cmtr);
  }

   // Nouvelle méthode pour récupérer les commentaires associés à un post spécifique
   getCommentsByPostId(postId: number): Observable<Cmtr[]> {
    return this.http.get<Cmtr[]>(`${this.baseUrl}getCommentsByPostId/${postId}`);
  }

    // Nouvelle méthode pour affecter un utilisateur à un commentaire
    assignUserToComment(commentId: number, userId: number): Observable<Cmtr> {
      return this.http.post<Cmtr>(`${this.baseUrl}${commentId}/assignUserToComment/${userId}`, {});
    }
}
