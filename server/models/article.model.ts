export interface HourlyTraffic {
    hour: number
    traffic: number
}

export interface DailyTraffic {
    day: number
    hourly_traffic: HourlyTraffic[]
}

export class ArticleModel {
    id!: string
    url!: string
    author!: string
    image_url!: string
    geo!: string
    daily_traffic!: DailyTraffic[]
}
