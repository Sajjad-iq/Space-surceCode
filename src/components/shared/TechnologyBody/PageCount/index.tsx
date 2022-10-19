import { DataContext } from '../../../../Context/ContextProvider';
import { useContext } from 'react';
export default function PageCount() {

    const { DataIndex, setDataIndex } = useContext(DataContext)
    const index = [0, 1, 2]
    return (
        <section className="page-count">
            {index.map((i) => {
                return <button
                    key={i}
                    onClick={() => setDataIndex(i)}
                    className={DataIndex === i ? "page-count-button index-active" : "page-count-button"}
                >{i}</button>
            })}
        </section>
    )
}
