import { Router } from "express";
import { TicketService } from "../services/tickets.service.js";

const service = new TicketService();
const r = Router();

r.get("/", async (_req, res) => {
  const tickets = await service.findAll();

  return res.status(200).send(tickets);
});

r.post("/", async (req, res) => {
  const ticket = await service.create(req.body);

  return res.status(201).send(ticket);
});

r.patch("/:id/complete", async (req, res) => {
  const { id } = req.params;
  const updated = await service.updateIsCompleted(id);

  return res.status(200).send(updated);
});

r.delete("/:id", async (req, res) => {
  const ticket = await service.delete(req.params.id);

  return res.status(200).send(ticket);
});

export { r as ticketsRouter };
