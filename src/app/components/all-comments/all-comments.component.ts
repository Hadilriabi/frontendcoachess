import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { Cmtr } from 'src/app/model/Cmtr';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-all-comments',
  templateUrl: './all-comments.component.html',
  styleUrls: ['./all-comments.component.css']
})
export class AllCommentsComponent {

  cmtrs: Cmtr[] = [];

  constructor(private commentService: CommentService, private router: Router) {}

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts(): void {
    this.commentService.retrieveAllComments().subscribe({
      next: (cmtrs: Cmtr[]) => {
        console.log(cmtrs); // Vérifiez les données reçues
        this.cmtrs = cmtrs;
      },
      error: (error) => {
        console.error('There was an error retrieving the posts:', error);
      }
    });
  }
  
  
  formatDate(dateString: string): string {
    return moment(dateString).format('HH:mm DD/MM/YYYY');
  }
  
}
