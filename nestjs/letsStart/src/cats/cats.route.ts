import { Router } from "express";
import { creadteCat, deleteCat, readAllCats, readCat, updateCat, updatePartialCat } from "./cats.service";

const router = Router();

router.get('/cats', readAllCats);
router.get('/cats/:id', readCat);
router.post('/cats', creadteCat);
router.put('/cats/:id', updateCat);
router.patch('/cats/:id', updatePartialCat);
router.delete('/cats/:id', deleteCat);

export default router;