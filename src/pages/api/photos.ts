import type { NextApiRequest, NextApiResponse } from "next"
import { listPhotos, DataPhotos } from "../../services/photos"

export default function handler(
    req:NextApiRequest,
    res:NextApiResponse<any>
){
    return res.status(200).json(listPhotos)
}