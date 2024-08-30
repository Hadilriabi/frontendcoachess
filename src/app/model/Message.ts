import { User } from "./User";

export class Message {
    MessageId!: number;
    body!: string;
    datemsg!: Date;

    user!: User;
}