import { eq, sql } from "drizzle-orm";
import { db } from "../db/index.js";
import { ticketsTable, type NewTicket, type Ticket } from "../db/schema.js";

interface IServiceResponse<T> {
  success: boolean;
  data: T | null;
  error?: string;
}
export class TicketService {
  private readonly database = db;
  constructor() {}

  findAll = async (): Promise<IServiceResponse<Ticket[]>> => {
    const tickets = await this.database.select().from(ticketsTable);

    if (!tickets)
      return { success: false, data: [], error: "No tickets found" };

    if (tickets.length < 1) return { success: true, data: [] };

    return {
      success: true,
      data: tickets,
    };
  };
  create = async (ticket: NewTicket): Promise<IServiceResponse<string>> => {
    if (!ticket)
      return { success: false, data: null, error: "No ticket provided" };

    const [newTicket] = await this.database
      .insert(ticketsTable)
      .values(ticket)
      .returning();

    if (!newTicket)
      return { success: false, data: null, error: "Error creating ticket" };

    return {
      success: true,
      data: newTicket.id,
    };
  };

  updateIsCompleted = async (id: string): Promise<IServiceResponse<string>> => {
    if (!id) return { success: false, data: null, error: "No id provided" };

    const [updatedTicket] = await this.database
      .update(ticketsTable)
      .set({ isCompleted: true, completedAt: sql`now()` })
      .where(eq(ticketsTable.id, id))
      .returning();

    if (!updatedTicket)
      return { success: false, data: null, error: "Error updating ticket" };

    return {
      success: true,
      data: updatedTicket.id,
    };
  };

  delete = async (id: string): Promise<IServiceResponse<[]>> => {
    if (!id) return { success: false, data: [], error: "No id provided" };

    const [deletedTicket] = await this.database
      .delete(ticketsTable)
      .where(eq(ticketsTable.id, id))
      .returning();

    if (!deletedTicket)
      return { success: false, data: [], error: "Error deleting ticket" };

    return {
      success: true,
      data: [],
    };
  };
}
