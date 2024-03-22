import { Availability } from 'src/enum/availability.enum';
import { TicketType } from 'src/enum/ticketType.enum';

export interface Event {
  id: number;
  name: string;
  date: string;
  description: string;
  ticketName: string;
  ticketType: TicketType;
  ticketPrice: number;
  ticketAvailability: Availability;
}
