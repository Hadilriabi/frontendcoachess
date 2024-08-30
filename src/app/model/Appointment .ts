import { User } from "./User";

export class Appointment {
    id!: number;
  date!: string; // format: 'YYYY-MM-DD'
  startTime!: string; // format: 'HH:MM:SS'
 isApproved!: boolean;
 user!: User; // Assurez-vous que User est correctement défini et sérialisé
}