import { Router } from "https://deno.land/x/oak/mod.ts";
import bookController from "../controller/bookController.ts";

const router: Router = new Router();

router.get("/", bookController.index);
router.get("/:id", bookController.show);
router.post("/", bookController.store);
router.put("/:id", bookController.update);
router.delete("/:id", bookController.delete);

export { router };
