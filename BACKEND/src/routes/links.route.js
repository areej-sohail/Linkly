import express from 'express'
import { getUserLinks, getStats } from '../controllers/links.controller.js'

const router = express.Router()

router.get("/", getUserLinks)
router.get("/stats", getStats)

export default router
