import { Router } from 'express'
import { articleService } from '../services/article.service'
import { TimeFrame } from '../types/articleQueryParams.type'

export const ArticleRouter = Router()

ArticleRouter.get('/article', (req, res) => {
    let queryParams
    if (req.query?.timeFrame) {
        queryParams = {
            timeFrame: req.query.timeFrame as TimeFrame
        }
    }
    
    const articleDtos = articleService.find(queryParams)

    res.send(articleDtos)
})

ArticleRouter.get('/article/:articleId', (req, res) => {
    const articleId = req.params.articleId

    let queryParams
    if (req.query?.timeFrame) {
        queryParams = {
            timeFrame: req.query.timeFrame as TimeFrame
        }
    }
    
    const articleDto = articleService.read(articleId, queryParams)

    res.send(articleDto)
})
