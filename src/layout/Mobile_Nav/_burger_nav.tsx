import Button from '../../components/common/Button'
import Mobile_Nav_Services from '../../services/Mobile_Nav';
import CloseBTN from './_close_btn';


export default function BurgerNAV() {
    const { pathNames, splitLocation } = Mobile_Nav_Services()
    return (
        <ul className="burger-nav-list">
            <CloseBTN />
            {pathNames.map((ele, index) => {
                return <li key={ele} className={splitLocation[1] === ele ? "container active" : "container"}>
                    <p className='page-index'>0{index}</p>
                    <Button btnName={ele === "travel-to-space" ? "HOME" : ele} linkTo={`/${ele}`} />
                </li>
            })
            }
        </ul>
    )

}