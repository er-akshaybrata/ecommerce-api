import { fetch,create,update,remove } from "../controller/user.controller.js";
import express from "express";
const router = express.Router()
router.get('/',fetch)
router.post('/',create)
router.put('/:id',update)
router.delete('/:id',remove)

export default router
