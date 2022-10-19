import ContentSide from "./_content_side";
import ImageSide from "./_image_side";

export default function DESTINATION() {
    return (
        <section className="destination">
            <section className="destination-wrapper">
                <ImageSide />
                <ContentSide />
            </section>
        </section>
    )
}
