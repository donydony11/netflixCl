import  prismadb from '@/lib/prismadb';
import { NextApiRequest, NextApiResponse } from "next"

import serverAuth from '@/lib/serverAuth';
import MovieCard from '@/components/MovieCard';

export default async function(req: NextApiRequest, res: NextApiResponse){
    if(req.method != "GET"){
        return res.status(405).end()
    }
    try{
        await serverAuth(req, res)

        const { movieId } = req.query

        if(typeof movieId != 'string'){
            throw new Error('Invalid ID')
        }
        if(!movieId){
            throw new Error('Invalid ID')
        }
    
    const movie = await prismadb.movie.findUnique({
        where: {
            id: movieId
        }
    })
    if(!movie){
        throw new Error('Invalid ID')
    }
    return res.status(200).json(movie)
}
    catch(error){
console.log(error)
        return res.status(400).end()
    }
}