import { useContext } from "react";
import { DataContext } from "../../Context/ContextProvider";
import LaunchVehicle from "../../assets/Images/technology/image-launch-vehicle-landscape.jpg"
import LaunchVehiclePortrait from "../../assets/Images/technology/image-launch-vehicle-portrait.jpg"
import Spaceport from "../../assets/Images/technology/image-spaceport-landscape.jpg"
import SpaceportPortrait from "../../assets/Images/technology/image-spaceport-portrait.jpg"
import SpaceCapsule from "../../assets/Images/technology/image-space-capsule-landscape.jpg"
import SpaceCapsulePortrait from "../../assets/Images/technology/image-space-capsule-portrait.jpg"

export default function ImageSide() {
    const { DataIndex, setDataIndex } = useContext(DataContext)
    return (
        <section className="image-side">
            <img src={DataIndex === 3 ? setDataIndex(0) : "" ||
                DataIndex === 0 && window.innerWidth <= 820 ? LaunchVehicle : "" ||
                    DataIndex === 0 ? LaunchVehiclePortrait : "" ||
                        DataIndex === 1 && window.innerWidth <= 820 ? Spaceport : "" ||
                            DataIndex === 1 ? SpaceportPortrait : "" ||
                                DataIndex === 2 && window.innerWidth <= 820 ? SpaceCapsule : "" ||
                                    DataIndex === 2 ? SpaceCapsulePortrait : ""
            }
                className="technology-image" alt="the technology" />
        </section>
    )
}
