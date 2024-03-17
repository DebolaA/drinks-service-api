import { CONFIG } from './../config'
import { ServerResponse } from 'http'
const url = require('node:url')
const https = require('https')

export interface IAPIOptions {
    method: string
    headers: {
        'X-RapidAPI-Key': string
        'X-RapidAPI-Host': string
    }
}

export const getPokemon = async () => {
    const options: IAPIOptions = {
        method: 'Get',
        headers: {
            'X-RapidAPI-Key': '',
            'X-RapidAPI-Host': 'pokeapi.co',
        },
    }

    try {
        const response = await fetch(
            'https://pokeapi.co/api/v2/berry/cheri',
            options,
        )
        const data = await response.json()
        // console.log(data)
        return data
    } catch (error) {
        console.error('Error:', error)
    }
}

export const buildRequestUrl = (
    videoId: string = 'QZ4BXGgmATU',
    pageNo: number = 1,
    pageSize: number = 1,
) => {
    const requestUrl: string = url.format({
        protocol: 'https',
        hostname: CONFIG.youtubeApiHostName,
        pathname: CONFIG.youtubeApiPathName,
        query: {
            key: CONFIG.youtubeToken,
            part: 'snippet',
            videoId: videoId,
            maxResults: pageSize,
        },
    })
    return requestUrl
}

export const getYoutubeVideoComments = async (
    videoId: string = 'QZ4BXGgmATU',
    pageNo: number = 1,
    pageSize: number = 1,
) => {
    const requestUrl: string = buildRequestUrl(videoId, pageNo, pageSize)

    // console.log(requestUrl)
    if (requestUrl.length) {
        fetch(requestUrl)
            .then(async (response: Response) => {
                const commentList = await response.json()
                console.log(commentList)
                return commentList
            })
            .catch(function (err: Error) {
                console.log('Unable to fetch -', err)
            })
        // await fetch(
        //     https
        //         .get(
        //             'https://www.googleapis.com/youtube/v3/commentThreads?key=AIzaSyDb47DsX7DclAqMzZ4Ojy9XMS2b57IM7ek&part=snippet&maxResults=1&videoId=QZ4BXGgmATU',
        //             (resp: ServerResponse) => {
        //                 let data = ''
        //                 resp.on('data', (chunk) => {
        //                     data += chunk
        //                 })

        //                 resp.on('end', () => {
        //                     let commentData = JSON.parse(data)
        //                     console.log(commentData)
        //                 })
        //             },
        //         )
        //         .on('error', (err: Error) => {
        //             console.log('Error: ', err.message)
        //         }),
        // ).then((result: any) => {
        //     console.log(result)
        // })
    }
}
