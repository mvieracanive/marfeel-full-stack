import { ArticleDto } from "../dtos/article.dto";
import { ArticleModel } from "../models/article.model";
import { TimeFrame } from "../types/articleQueryParams.type";

function modelToDto(model: ArticleModel) {
    const articleDto = new ArticleDto()
    articleDto.id = model.id
    articleDto.author = model.author
    articleDto.geo = model.geo
    articleDto.imageUrl = model.image_url
    articleDto.url = model.url

    const dailyTraffic = model.daily_traffic
    
    let traffic 
    if (dailyTraffic?.length > 1) {
        traffic = dailyTraffic.map(it => ({
            label: it.day,
            value: it.hourly_traffic.reduce((acc, it) => acc + it.traffic, 0)
        }))
    }
    else {
        if (!dailyTraffic?.length) {
            traffic = []
        }

        const hourlyTraffic = dailyTraffic?.[0]?.hourly_traffic
        traffic = hourlyTraffic?.map(it => ({
            label: it.hour,
            value: it.traffic
        }))
    }

    articleDto.traffic = traffic

    return articleDto
}

function filterInTimeTraffic (article: ArticleModel, day: number, timeframe?: TimeFrame) {
    const dailyTraffic = article.daily_traffic

    switch(timeframe) {
        case 'yesterday': 
            return dailyTraffic.filter(it => it.day === day - 1)
        case 'seven-days':
            return dailyTraffic.filter(it => it.day > day - 7 && it.day <= day)
        case 'day':
            return dailyTraffic.filter(it => it.day === day)
        default:
            return dailyTraffic
    }
}

export function modelToDtoByTimeFrame(model: ArticleModel, day: number, timeframe?: TimeFrame) {
    const filterInTimeDailyTraffice = filterInTimeTraffic(model, day, timeframe)

    const articleDto = modelToDto({ ...model, daily_traffic: filterInTimeDailyTraffice })
    
    articleDto.timeframe = timeframe ?? 'month'
    return articleDto
}
