import { Availability } from 'src/enum/availability.enum';
import { TicketType } from 'src/enum/ticketType.enum';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  date: string;

  @Column()
  description: string;

  @Column()
  ticketName: string;

  @Column()
  ticketType: TicketType;

  @Column()
  ticketPrice: number;

  @Column()
  ticketAvailability: Availability;
}
