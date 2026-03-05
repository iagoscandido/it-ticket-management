import e from "express";

const server = e();

server.get("/", (_req, res) => {
  res.status(200).json("Hello World");
});

server.listen(8080, "0.0.0.0", () => {
  console.log("Server is running on http://localhost:8080");
});
