import { Form } from "./Form";
import { Needs } from "./Needs";
import {Message} from "./Message"
import { Cmtr } from "./Cmtr";
import { Appointment } from "./Appointment ";

export class User {
  UserId!: number;
  username!: string;
  email!: string;
  password!: string;

  needs!: Needs[];

  messages!: Message[];
  comments!:Cmtr[];
  forms!: Form[];
  appointments!: Appointment[]; // Correction ici
}
