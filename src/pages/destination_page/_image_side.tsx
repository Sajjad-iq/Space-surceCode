import Moon_Image from "../../assets/Images/destination/image-moon.png"
import Mars_Image from "../../assets/Images/destination/image-mars.png"
import Europa_Image from "../../assets/Images/destination/image-europa.png"
import Titan_Image from "../../assets/Images/destination/image-titan.png"
import { DataContext } from "../../Context/ContextProvider";
import { useContext } from "react";

export default function ImageSide() {
    const { DataIndex } = useContext(DataContext)

    return (
        <section className="img-side">
            <h1 className="header"><p className="stage">01</p>PICK YOUR DESTINATION</h1>
            <img className="planet-img"
                src={
                    DataIndex === 0 ? Moon_Image : "" ||
                        DataIndex === 1 ? Mars_Image : "" ||
                            DataIndex === 2 ? Europa_Image : "" ||
                                DataIndex === 3 ? Titan_Image : ""
                }
                alt="planet-img" />
        </section>
    )
}
