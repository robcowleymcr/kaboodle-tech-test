import { Entity } from 'typeorm';

@Entity()
export class UpdateEvent {
  data: string;
}
