import { useParams } from "react-router-dom";
import { ArticleProps, Chart } from "../components";
import { ArticleV2 } from "../components/article-v2/ArticleV2";
import { ContentContainer } from "../components/layouts/ContentContainer";
import { SimpleCard } from "../components/layouts/SimpleCard";
import { useFetchData } from "../hooks/useFetchData";
import { ArticleQueryParam } from "../types/ArticleQueryParam";
import { AppGlobalState } from "../App";
import { articleDetailPresenter } from "../presenters/ArticleDetailPresenter";

export type ArticleDetailsProps = AppGlobalState

export interface ArticleDetailsPageState {
    chartData: number[]
    chartLabels: string[]
    article: Omit<ArticleProps, 'navigate'>
}

export function ArticleDetails(props: ArticleDetailsProps) {
    const { articleId } = useParams()

    const { data } = useFetchData<ArticleDetailsPageState, ArticleQueryParam>({
        fetchingMethod: articleDetailPresenter.getArticlesData,
        args: { timeFrame: props.timeFrame, id: articleId },
    }, [ props.timeFrame, articleId ])

    if (!data?.article) {
        return <></>
    }

    return <ContentContainer>
            <SimpleCard>
                <ArticleV2 { ...data.article } />
            </SimpleCard>

            <SimpleCard>
                <Chart
                    labels={ data?.chartLabels ?? [] }
                    data={ data?.chartData ?? [] }
                    title='Traffic' />
            </SimpleCard>
        </ContentContainer> 
}
