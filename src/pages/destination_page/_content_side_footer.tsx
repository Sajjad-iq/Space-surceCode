import { DataContext } from "../../Context//ContextProvider";
import { useContext } from "react";
import { StockData } from "../../data/data"

export default function ContentSideFooter() {
    const { DataIndex } = useContext(DataContext)

    return (
        <section className="content-side-footer">
            <article className="container">
                <p className="time-avg">AVG. DISTANCE</p>
                <h5 className="data">{StockData.destinations[DataIndex].distance.toLocaleUpperCase()}</h5>
            </article>
            <article className="container">
                <p className="time-avg">Est. travel time</p>
                <h5 className="data">{StockData.destinations[DataIndex].travel.toLocaleUpperCase()}</h5>
            </article>
        </section>
    )
}
