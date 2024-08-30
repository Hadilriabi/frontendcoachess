import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/model/Post';
import { PostService } from 'src/app/services/post.service';
import * as moment from 'moment';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postService: PostService, private router: Router) {}

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts(): void {
    this.postService.retrieveAllPosts().subscribe({
      next: (posts: Post[]) => {
        this.posts = posts;
      },
      error: (error) => {
        console.error('There was an error retrieving the posts:', error);
      }
    });
  }

  incrementLikes(post: Post): void {
    post.likes++;
  }

  incrementDislikes(post: Post): void {
    post.dislikes++;
  }

  formatDate(dateString: string): string {
    return moment(dateString).format('HH:mm DD/MM/YYYY');
  }

  openCommentForm(postId: number | undefined): void {
    if (postId !== undefined) {
      // Redirige vers le formulaire d'ajout de commentaire avec l'ID du post
      this.router.navigate(['/add-comment-to-post', postId]);
      
    }
  }
 

}
