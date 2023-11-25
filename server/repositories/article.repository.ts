import dataset from '../dataset.json'
import { ArticleModel } from '../models/article.model'

class ArticleRepository {
    read(articleId: string): ArticleModel | undefined {
        const trafficData = dataset.traffic_data
        const article = trafficData.find(item => item.id === articleId)
        
        return article
    }

    findAll(): ArticleModel[] | undefined {
        return dataset.traffic_data
    }
}

export const articleRepository = new ArticleRepository()
