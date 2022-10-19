import Article from "../../components/common/Article";
import SmallButtons from "../../components/shared/SmallButtons";
import { DataContext } from "../../Context/ContextProvider";
import { useContext } from "react";
import { StockData } from "../../data/data"
import ContentSideFooter from "./_content_side_footer";

export default function ContentSide() {
    const { DataIndex } = useContext(DataContext)

    return (
        <section className="content-side">
            <SmallButtons />
            <Article presentation=""
                header={StockData.destinations[DataIndex].name.toLocaleUpperCase()}
                description={StockData.destinations[DataIndex].description}
            />
            <ContentSideFooter />
        </section>
    )
}
