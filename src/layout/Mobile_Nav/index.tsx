import BurgerNAV from "./_burger_nav";
import { useContext } from "react";
import { DataContext } from "../../Context/ContextProvider";

export default function BurgerNav() {
    const { isBurger_BtnActive } = useContext(DataContext);
    return (
        <section className={isBurger_BtnActive ? "BurgerNav show" : "BurgerNav"} >
            <BurgerNAV />
        </section>

    )
}
