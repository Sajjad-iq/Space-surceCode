import Buttons from "./_buttons";
import logo from '../../assets/Images/shared/logo.svg'

import BurgerBTN from "./_burger_btn";

export default function Navigation() {
    return (
        <nav className="Navigation">
            <img className="logo" src={logo} alt="logo" />
            <hr className="HR-line" />
            <Buttons />
            <BurgerBTN />
        </nav>
    )
}
