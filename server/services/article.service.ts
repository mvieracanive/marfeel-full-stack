import { HttpError } from "../errors/httpError"
import { modelToDtoByTimeFrame } from "../mappers/article.mapper"
import { articleRepository } from "../repositories/article.repository"
import { ArticleQueryParams } from "../types/articleQueryParams.type"

class ArticleService {
    read(articleId: string, queryParams?: ArticleQueryParams) {
        //Assuming ordered labels
        const articleModel = articleRepository.read(articleId)
        
        if (!articleModel) {
            throw new HttpError(404, `Article with id ${ articleId } not found`)
        }

        const day = (new Date()).getDate()

        return modelToDtoByTimeFrame(articleModel, day, queryParams?.timeFrame)
    }

    find(queryParams?: ArticleQueryParams) {
        //Assuming ordered labels
        const articleModels = articleRepository.findAll()

        if (!articleModels) {
            return
        }

        const day = (new Date()).getDate()

        return articleModels.map(it => modelToDtoByTimeFrame(it, day, queryParams?.timeFrame))
    }
}

export const articleService = new ArticleService()
