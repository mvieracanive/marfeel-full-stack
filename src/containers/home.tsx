import { Article, ArticleProps, Chart } from "../components"
import { SimpleCard } from "../components/layouts/SimpleCard"
import { ContentContainer } from "../components/layouts/ContentContainer"
import { useFetchData } from "../hooks/useFetchData"
import { ArticleQueryParam } from "../types/ArticleQueryParam"
import { useNavigate } from "react-router-dom"
import { AppGlobalState } from "../App"
import { homePresenter } from "../presenters/HomePresenter"

export type HomeProps = AppGlobalState

export interface HomePageState {
    chartData: number[]
    chartLabels: string[]
    articles: Omit<ArticleProps, 'navigate'>[]
}

export function Home(props: HomeProps) {
    const navigate = useNavigate()

    const { data } = useFetchData<HomePageState, ArticleQueryParam>({
        fetchingMethod: homePresenter.getArticlesData,
        args: { timeFrame: props.timeFrame },
    }, [ props.timeFrame ])

    if (!data?.chartData || !data?.articles?.length) {
        return <></>
    }

    return <ContentContainer>
        <SimpleCard>
            <Chart
                labels={ data.chartLabels }
                data={ data.chartData }
                title='Traffic' />
        </SimpleCard>

        <SimpleCard>
            { data.articles.map(it => <Article { ...it } navigate={ navigate } />)}
        </SimpleCard>
    </ContentContainer> 
    
}
