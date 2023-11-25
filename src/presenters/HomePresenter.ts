import { HomePageState } from "../containers/home";
import { TrafficModel, articleRepository } from "../repositories/ArticleRepository";
import { ArticleQueryParam } from "../types/ArticleQueryParam";

class HomePresenter {
    async getArticlesData(query: ArticleQueryParam): Promise<HomePageState> {
        const articles = await articleRepository.findAll(query.timeFrame)

        if (!articles) {
            return {
                chartData: [],
                chartLabels: [],
                articles: []
             }
        }

        const trafficMap = new Map<string, number>()

        const chartLabels: string[] = []
        const sumTrafficByLabel = (traffic: TrafficModel[]) => {
            traffic.map(it => {
                const itLabel = `${ it.label }`
                if (!trafficMap.get(itLabel)) {
                    trafficMap.set(itLabel, 0)
                    chartLabels.push(itLabel)
                }

                const accTraffic = trafficMap.get(itLabel)! + it.value

                trafficMap.set(itLabel, accTraffic)
            })
        }

        const sumTrafficByArticle = (traffic: TrafficModel[]) => {
            return traffic.reduce((acc, it) => acc + it.value, 0)
        }

        articles.map(it => sumTrafficByLabel(it.traffic))

        const articleList = articles.map(it => ({
            id: it.id,
            image: it.imageUrl,
            url: it.url,
            author: it.author,
            traffic: sumTrafficByArticle(it.traffic)
        }))

        articleList.sort((a, b) => b.traffic - a.traffic)
        const chartData = chartLabels.map(it => trafficMap.get(it)!)

        return {
            chartLabels,
            chartData,
            articles: articleList
        }
    }

}

export const homePresenter = new HomePresenter()
