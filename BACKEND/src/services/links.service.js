import { findLinksByUserId } from '../dao/user.dao.js'

export const getLinks = async (userId) => {
    const links = await findLinksByUserId(userId)
    return links
}

export const getLast7DaysClicks = async (userId) => {
    const days = []
    for (let i = 6; i >= 0; i--) {
        const date = new Date()
        date.setDate(date.getDate() - i)
        const start = new Date(date.setHours(0, 0, 0, 0))
        const end = new Date(date.setHours(23, 59, 59, 999))

        const result = await ShortUrl.aggregate([
            { $match: { user: userId, createdAt: { $gte: start, $lte: end } } },
            { $group: { _id: null, total: { $sum: "$clicks" } } }
        ])

        days.push({
            day: start.toLocaleDateString('en-US', { weekday: 'short' }),
            clicks: result[0]?.total || 0
        })
    }
    return days
}