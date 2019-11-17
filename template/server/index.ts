import express, { Request, Response } from "express";

import htmlTemplate from "./template";

const PORT = 8080;
const app = express();

interface IResponse extends Response {
  setHeader: (key: string, value: string) => void;
}

app.get("/", (req: Request, res: IResponse) => {
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.send(htmlTemplate());
});

app.use(express.static("dist"));

app.listen(PORT, () => {
  console.log(`Listening @ http://localhost:${PORT}`);
});
