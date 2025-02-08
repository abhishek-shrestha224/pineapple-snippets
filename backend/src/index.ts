import "reflect-metadata";
import express from "express";
import cors from "cors";
import { useExpressServer, useContainer } from "routing-controllers";
import { Container } from "typedi";
import { AuthController } from "./controllers/AuthController";

const app = express();

app.use(cors({ origin: "http://localhost:3000", credentials: true }));

useContainer(Container);

useExpressServer(app, {
    controllers: [AuthController],
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

export default app;
