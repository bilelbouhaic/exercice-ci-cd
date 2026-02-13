import express, { Request, Response } from "express";

const app = express();
const PORT = 3000;

app.get("/health", (req: Request, res: Response) => {
  res.json({ status: "OK", message: "API Master 1 opérationnelle" });
});

app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
// Trigger CI
