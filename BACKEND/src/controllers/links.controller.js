import WrapAsync from "../utils/tryCatchWrapper.js"
import { getLinks, getLast7DaysClicks } from "../services/links.service.js"

export const getUserLinks = WrapAsync(async(req, res) => {
    if(!req.user) throw new Error("Unauthorized")
    const links = await getLinks(req.user._id)
    res.status(200).json(links)
})

export const getStats = WrapAsync(async(req, res) => {
    if(!req.user) throw new Error("Unauthorized")
    const days = await getLast7DaysClicks(req.user._id)
    res.status(200).json(days)
})