import DouglasHurley from '../../assets/Images/crew/image-douglas-hurley.png'
import MarkShuttleworth from '../../assets/Images/crew/image-mark-shuttleworth.png'
import VictorGlover from '../../assets/Images/crew/image-victor-glover.png'
import AnoushehAnsari from '../../assets/Images/crew/image-anousheh-ansari.png'
import { DataContext } from "../../Context/ContextProvider"
import { useContext } from "react"

export default function ImageSide() {
  const { DataIndex } = useContext(DataContext)
  return (
    <section className="image-side">
      <img src={DataIndex === 0 ? DouglasHurley : "" ||
        DataIndex === 1 ? MarkShuttleworth : "" ||
          DataIndex === 2 ? VictorGlover : "" ||
            DataIndex === 3 ? AnoushehAnsari : ""
      }
        alt="crew member" className="crew-member-img" />
    </section>
  )
}
