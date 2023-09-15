import { Router } from "express";
import musicController from "../controllers/music-controller";
import { validateSchemaMiddleware } from "middlewares/auth-middleware";
import { musicSchema } from "schemas/music-schema";

const musicRouter = Router();

musicRouter.get("/musics", musicController.getMusics);
musicRouter.post("/musics", validateSchemaMiddleware(musicSchema) ,musicController.createMusic); // TODO: validação via Joi

export default musicRouter;