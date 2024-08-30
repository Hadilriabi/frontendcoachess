import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cmtr } from 'src/app/model/Cmtr';
import { CommentService } from 'src/app/services/comment.service';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-post-comments-component',
  templateUrl: './post-comments-component.component.html',
  styleUrls: ['./post-comments-component.component.css']
})
export class PostCommentsComponentComponent implements OnInit {
  @Input() postId!: number; // ID du post passé en tant qu'input
  comments: Cmtr[] = [];


  constructor(
    private commentService: CommentService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Récupérer l'ID du post à partir de l'URL
    this.postId = +this.route.snapshot.paramMap.get('postId')!;
    
    // Récupérer les commentaires pour ce post
    this.loadComments();
    
  }

  loadComments(): void {
    this.commentService.getCommentsByPostId(this.postId).subscribe(
      (comments: Cmtr[]) => {
        this.comments = comments;
      },
      (error) => {
        console.error('There was an error retrieving the comments:', error);
      }
    );
  }
}
