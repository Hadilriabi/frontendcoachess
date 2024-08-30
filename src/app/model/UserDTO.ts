export interface UserDTO {
    userId?: number; // Le ? indique que l'ID est optionnel, car il pourrait ne pas être défini lors de la création.
    username: string;
    email: string;
    password: string;
  }
  