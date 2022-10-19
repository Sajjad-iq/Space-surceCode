import { DataContext } from "../../Context/ContextProvider";
import { useContext } from "react";
export default function PageIndexButtons() {

    const { DataIndex, setDataIndex } = useContext(DataContext)
    const btns = [0, 1, 2, 3];

    return (
        <section className="page-index-buttons">
            {btns.map((index) => {
                return <button
                    key={index}
                    className={index === DataIndex ? "index-button index-active" : "index-button"}
                    onClick={() => setDataIndex(index)}
                ></button>
            })}
        </section>
    )
}
