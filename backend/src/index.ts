import e from "express";
import { ticketsRouter } from "./routes/ticket.routes.js";

const server = e();

server.use(e.json());

server.use("/tickets", ticketsRouter);

server.listen(8080, "0.0.0.0", () => {
  console.log("Server is running on http://localhost:8080");
});
