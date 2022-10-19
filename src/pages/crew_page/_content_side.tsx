import Article from '../../components/common/Article'
import { DataContext } from "../../Context/ContextProvider"
import { StockData } from '../../data/data'
import { useContext } from "react"
import PageIndexButtons from './_page_index_buttons'

export default function ContentSide() {
    const { DataIndex } = useContext(DataContext)
    return (
        <section className='content-side'>
            <h1 className="header"><p className="stage">01</p>MEET YOUR CREW</h1>
            <Article
                presentation={StockData.crew[DataIndex].role}
                header={StockData.crew[DataIndex].name}
                description={StockData.crew[DataIndex].bio}
            />
            <PageIndexButtons />
        </section>
    )
}
