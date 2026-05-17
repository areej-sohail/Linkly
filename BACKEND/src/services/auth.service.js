import { createUser, findUserByEmail, findLinksByUserId } from '../dao/user.dao.js'
import { ConflictError } from '../utils/errorHandling.js'
import { signToken } from '../utils/helper.js'

export const registerUser = async (name, email, password) => {
    const user = await findUserByEmail(email)
    if(user) throw new ConflictError('User already exists')

    const newUser = await createUser(name, email, password)
    const token = signToken({ id: newUser._id })
     return { token, user: { name: newUser.name, email: newUser.email, _id: newUser._id } }
}

export const loginUser = async (email, password) => {
    const user = await findUserByEmail(email)
    if(!user || user.password !== password) throw new Error('Invalid Credentials')

    const token = signToken({ id: user._id })
    return {token, user}
}

export const logoutUser = async () => {
    return true
}
