import { Request, Response } from 'express'
import * as commentService from '../services/youtube-comment_service'

export const getPokemon = async (req: Request, res: Response) => {
    const pokemon = await commentService.getPokemon()
    // console.log(pokemon)
    res.send(pokemon)
}

export const getAllYoutubeComments = async (req: Request, res: Response) => {
    const commentList = await commentService.getYoutubeVideoComments()
    console.log(commentList)
    // res.json(commentList).status(200)
    res.send(commentList)
}
