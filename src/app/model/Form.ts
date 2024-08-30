import { FormEnum } from "./FormEnum ";
import { User } from "./User";

    export class Form {
        formId!: number;              // Remarquez que la convention de nommage est en camelCase
  question!: string;
  response!: number | null;     // Utilisez number | null pour permettre des valeurs nulles
  stringResponse!: FormEnum;    // Utilisez l'énumération FormEnum définie ci-dessous
  user!: User;                  // Référence à l'utilisateur associé
}