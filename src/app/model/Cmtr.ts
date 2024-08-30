import { Post } from "./Post";
import { User } from "./User";

export class Cmtr {
    idCmnt!: number;
    descCmnt!: string;
    dateCmnt!: string;  // LocalDateTime sera représenté par une chaîne en TypeScript
    user!: User;  // Assurez-vous d'avoir une classe User correspondante
    post!: Post;  // Référence circulaire possible, faites attention lors de l'utilisation
  }
  