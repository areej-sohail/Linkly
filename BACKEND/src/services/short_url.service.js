import { generateNanoId } from "../utils/helper.js"
import { getCustomShortUrl, saveShortUrl, findByFullUrlWithoutSlug } from "../dao/short_url.js"
import { ConflictError } from "../utils/errorHandling.js"

export const createShortUrlWithoutUser = async (url) => {
    const shortUrl = generateNanoId(7)
    if(!shortUrl) throw new Error("Short URL not generated")
    await saveShortUrl(shortUrl, url)
    return shortUrl
}

export const createShortUrlWithUser = async (url, userId, slug=null) => {
    if(slug) {
        // slug must be unique globally — anyone's slug
        const slugExists = await getCustomShortUrl(slug)
        if(slugExists) throw new ConflictError("This custom slug is already taken")
    } else {
        // no slug — user can only have ONE non-slug short url per long url
        const existingWithoutSlug = await findByFullUrlWithoutSlug(url, userId)
        if(existingWithoutSlug) throw new ConflictError("You already shortened this URL")
    }

    const shortUrl = slug || generateNanoId(7)
    await saveShortUrl(shortUrl, url, userId)
    return shortUrl
}