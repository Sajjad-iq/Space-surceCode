import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { DataContext } from "../../Context/ContextProvider";

export default function BurgerBTN() {
    const { isBurger_BtnActive, setBurger_BtnActive } = useContext(DataContext);
    function toggle() { setBurger_BtnActive(!isBurger_BtnActive) }

    return (
        <button onClick={toggle} className={isBurger_BtnActive ? "burger-btn hide" : "burger-btn"}>
            <FontAwesomeIcon className='burger-icon' icon={faBars} />
        </button>
    )
}
