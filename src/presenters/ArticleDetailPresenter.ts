import { ArticleDetailsPageState } from "../containers/articleDetails"
import { TrafficModel, articleRepository } from "../repositories/ArticleRepository"
import { ArticleQueryParam } from "../types/ArticleQueryParam"

class ArticleDetailPresenter {
    async getArticlesData(query: ArticleQueryParam): Promise<ArticleDetailsPageState> {
        const article = await articleRepository.read(query.id!, query.timeFrame)

        const sumTraffic = (traffic: TrafficModel[]) => {
            return traffic.reduce((acc, it) => acc + it.value, 0)
        }
        
        const chartData = article.traffic.map(it => it.value)
        const chartLabels = article.traffic.map(it => `${ it.label }`)

        return {
            chartLabels,
            chartData,
            article: {
                id: article.id,
                image: article.imageUrl,
                url: article.url,
                author: article.author,
                traffic: sumTraffic(article.traffic)
            }
        }
    }
}

export const articleDetailPresenter = new ArticleDetailPresenter()
