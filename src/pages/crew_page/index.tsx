import ContentSide from "./_content_side";
import ImageSide from "./_image_side";
import PageIndexButtons from "./_page_index_buttons";

export default function Crew() {
    return (
        <section className='crew-page'>
            <section className='crew-wrapper'>
                <ContentSide />
                <ImageSide />
            </section>
        </section>
    )
}
