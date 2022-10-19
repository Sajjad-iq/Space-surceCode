import { useContext } from "react"
import '../../../assets/Styles/components/shared/SmallButtons.css'
import { DataContext } from "../../../Context/ContextProvider"
export default function SmallButtons() {

    const { DataIndex, setDataIndex } = useContext(DataContext)
    const links = ["Moon", "Mars", "Europa", "Titan"]

    return (
        <section className="small-buttons-component">
            {links.map((el, index) => {
                return <button key={index} onClick={() => setDataIndex(index)} className={DataIndex === index ? "small-buttons active" : "small-buttons"}>{el}</button>
            })}
        </section>
    )
}
