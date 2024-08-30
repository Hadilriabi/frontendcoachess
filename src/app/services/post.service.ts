import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../model/Post';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  private baseUrl = 'http://localhost:8082/api/posts/'; // Modifier l'URL de base en conséquence


  constructor(private http: HttpClient) { }
  addPost(formData: FormData): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'addPost', formData);
  }

  retrieveAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.baseUrl + 'retrieveAllPosts');
  }

  affecterCommentsAPost(idPost: number, idComment: number): Observable<Post> {
    return this.http.post<Post>(`${this.baseUrl}${idPost}/comments/${idComment}`, {});
  }

  assignUserToPost(postId: number, userId: number): Observable<Post> {
    return this.http.post<Post>(`${this.baseUrl}${postId}/assignUser/${userId}`, {});
  }

}
