import urlSchema from "../models/shorturl.model.js";
import { ConflictError } from "../utils/errorHandling.js";

export const saveShortUrl = async (shortUrl, longUrl, userId) => {
    try {
        const newUrl = new urlSchema({ full_url: longUrl, short_url: shortUrl })
        if(userId) newUrl.user = userId
        await newUrl.save()
    } catch(err) {
        if(err.code == 11000) throw new ConflictError("This slug is already taken")
        throw new Error(err)
    }
}

export const getShortUrl = async (shortUrl) => {
    return await urlSchema.findOneAndUpdate({ short_url: shortUrl }, { $inc: { clicks: 1 } })
}

export const getCustomShortUrl = async (slug) => {
    return await urlSchema.findOne({ short_url: slug })
}

export const findByFullUrlWithoutSlug = async (fullUrl, userId) => {
    return await urlSchema.findOne({ 
        full_url: fullUrl, 
        user: userId,
        $expr: { $eq: [{ $strLenCP: "$short_url" }, 7] } // only nanoid generated ones
    })
}