import { useContext } from "react";
import { DataContext } from "../../Context/ContextProvider";
export default function CloseBTN() {
    const { isBurger_BtnActive, setBurger_BtnActive } = useContext(DataContext);
    function toggle() { setBurger_BtnActive(!isBurger_BtnActive) }

    return (
        <button onClick={toggle} className="close-btn">X</button>
    )
}
