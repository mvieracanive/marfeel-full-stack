export interface Traffic {
    label: number
    value: number
}

export class ArticleDto {
    id!: string
    url!: string
    author!: string
    imageUrl!: string
    geo?: string
    timeframe!: 'day' | 'seven-days' | 'yesterday' | 'month'
    traffic!: Traffic[]
}
