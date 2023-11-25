import axios from "axios";
import { TimeFrame } from "../types/TimeFrame";
import { CONFIGURATION } from "../config/config";

export interface TrafficModel {
    label: number
    value: number
}

export interface ArticleModel {
    id: string
    url: string
    author: string
    imageUrl: string
    traffic: TrafficModel[]
}

class ArticleRepository {
    async read(articleId: string, timeFrame: TimeFrame): Promise<ArticleModel> {
        const response = await axios.get(`${ CONFIGURATION.API }/article/${ articleId }?timeFrame=${ timeFrame }`)
        return response.data
    }

    async findAll(timeFrame: TimeFrame): Promise<ArticleModel[]> {
        const response = await axios.get(`${ CONFIGURATION.API }/article?timeFrame=${ timeFrame }`)
        return response.data
    }
}

export const articleRepository = new ArticleRepository()
