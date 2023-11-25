export type TimeFrame = 'day' | 'seven-days' | 'yesterday' | 'month'

export interface ArticleQueryParams {
    timeFrame: TimeFrame
}
