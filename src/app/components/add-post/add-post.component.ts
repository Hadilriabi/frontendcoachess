import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { Post } from 'src/app/model/Post';
import { PostService } from 'src/app/services/post.service';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  post: Post = new Post();
  selectedFile: File | null = null;
  imagePreview: string | ArrayBuffer | null = null;

  @ViewChild('postForm') postForm!: NgForm;

  constructor(private postService: PostService, private router: Router, private userDataService: UserDataService) {}

  ngOnInit(): void {
    const now = new Date();
    this.post.datecreation = now.toLocaleString('fr-FR', {
      hour: '2-digit',
      minute: '2-digit',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
    this.post.likes = 0; // Assurez-vous que likes est initialisé
    this.post.dislikes = 0; // Assurez-vous que dislikes est initialisé

    const userId = this.userDataService.getUserId();
    console.log('User ID:', userId); // Affiche l'ID de l'utilisateur dans la console
  }

  addPost(): void {
    if (this.postForm.valid) {
      const formData = new FormData();
      formData.append('descpost', this.post.descpost);

      // Convert the displayed date back to ISO string
      const [datePart, timePart] = this.post.datecreation.split(' ');
      const [day, month, year] = datePart.split('/');
      const [hours, minutes] = timePart.split(':');
      const isoDate = new Date(`${year}-${month}-${day}T${hours}:${minutes}:00`).toISOString();
      formData.append('datecreation', isoDate);
      formData.append('likes', this.post.likes?.toString() || '0'); // Assurez-vous que likes est défini
      formData.append('dislikes', this.post.dislikes?.toString() || '0'); // Assurez-vous que dislikes est défini

      if (this.selectedFile) {
        formData.append('image', this.selectedFile);
      }

      this.postService.addPost(formData).subscribe({
        next: (response: Post) => {
          console.log(response);
          this.post.idPost = response.idPost; // Assurez-vous de définir l'id du post créé
          // Assignation de l'utilisateur au post
          const userId = this.userDataService.getUserId();
          if (userId !== null) {
            this.postService.assignUserToPost(this.post.idPost, userId).subscribe({
              next: (updatedPost: Post) => {
                console.log('Utilisateur assigné au post:', updatedPost);
                this.openCommentForm(this.post.idPost);
              },
              error: (error) => {
                console.error('Erreur lors de l\'assignation de l\'utilisateur au post:', error);
              }
            });
          } else {
            console.error('User ID is null');
          }
        },
        error: (error) => {
          console.error(error);
        }
      });
    } else {
      console.error('Le formulaire n\'est pas valide');
    }
  }

  onFileSelected(event: any): void {
    if (event.target.files && event.target.files.length) {
      const file: File = event.target.files[0];
      if (file) {
        this.selectedFile = file;
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.imagePreview = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    }
  }

  incrementLikes(): void {
    this.post.likes++;
  }

  incrementDislikes(): void {
    this.post.dislikes++;
  }

  formatDate(dateString: string): string {
    return moment(dateString).format('HH:mm DD/MM/YYYY');
  }

  openCommentForm(postId: number | undefined): void {
    if (postId !== undefined) {
    } else {
      console.error('postId is undefined');
    }
  }
}
