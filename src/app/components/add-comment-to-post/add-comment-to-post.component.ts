import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cmtr } from 'src/app/model/Cmtr';
import { CommentService } from 'src/app/services/comment.service';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-add-comment-to-post',
  templateUrl: './add-comment-to-post.component.html',
  styleUrls: ['./add-comment-to-post.component.css']
})
export class AddCommentToPostComponent implements OnInit {

  comment: Cmtr = new Cmtr();  // Modèle de commentaire
  postId!: number;  // ID du post auquel ajouter le commentaire
  successMessage: string = '';  // Message de succès
  errorMessage: string = '';    // Message d'erreur

  constructor(
    private commentService: CommentService,
    private route: ActivatedRoute,
    private router: Router,
    private userDataService: UserDataService
  ) { }

  ngOnInit(): void {
    // Récupérer l'ID du post à partir de l'URL
    this.postId = +this.route.snapshot.paramMap.get('postId')!;
  }

  // Méthode pour ajouter un commentaire et l'affecter au post
  addCommentToPost(): void {
    // Définir la date actuelle dans le format ISO 8601
    this.comment.dateCmnt = new Date().toISOString();

    this.commentService.addCommentEtAffecterAPost(this.comment, this.postId).subscribe(
      (response) => {
        this.successMessage = 'Commentaire ajouté avec succès !';
        if (response.idCmnt) { // Vérifiez si idCmnt est défini
          this.assignUserToComment(response.idCmnt);
        } else {
          this.errorMessage = 'Erreur : ID du commentaire non défini.';
        }
      },
      (error) => {
        this.errorMessage = 'Une erreur est survenue lors de l\'ajout du commentaire.';
        console.error(error);
      }
    );
  }

  // Nouvelle méthode pour affecter l'utilisateur au commentaire
  private assignUserToComment(commentId: number): void {
    const userId = this.userDataService.getUserId();
    if (userId !== null && userId !== undefined) { // Vérifiez si userId est défini
      this.commentService.assignUserToComment(commentId, userId).subscribe(
        () => {
          this.successMessage += ' Utilisateur affecté au commentaire avec succès !';
        },
        (error) => {
          this.errorMessage = 'Une erreur est survenue lors de l\'affectation de l\'utilisateur au commentaire.';
          console.error(error);
        }
      );
    } else {
      this.errorMessage = 'Erreur : ID de l\'utilisateur non défini.';
    }
  }
}
