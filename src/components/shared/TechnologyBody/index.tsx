import Article from "../../common/Article";
import PageCount from "././PageCount"
import { DataContext } from '../../../Context/ContextProvider';
import { StockData } from "../../../data/data";
import { useContext } from 'react';

export default function TechnologyBody() {
    const { DataIndex } = useContext(DataContext)
    return (
        <section className="technology-body">
            <PageCount />

            <Article
                presentation="THE TERMINOLOGY…"
                header={StockData.technology[DataIndex].name}
                description={StockData.technology[DataIndex].description} />
        </section>
    )
}
