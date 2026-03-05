import {
  boolean,
  numeric,
  pgTable,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

export const ticketsTable = pgTable("tickets", {
  id: uuid().primaryKey().defaultRandom(),
  description: varchar({ length: 255 }).notNull(),
  client: varchar({ length: 255 }).notNull(),
  address: varchar({ length: 255 }).notNull(),

  value: numeric({ precision: 10, scale: 2 }).default("0").notNull(),
  costs: numeric({ precision: 10, scale: 2 }).default("0").notNull(),

  isCompleted: boolean("is_completed").default(false).notNull(),

  createdAt: timestamp("created_at").defaultNow().notNull(),
  completedAt: timestamp("completed_at"),
});

export type Ticket = typeof ticketsTable.$inferSelect;
export type NewTicket = typeof ticketsTable.$inferInsert;
