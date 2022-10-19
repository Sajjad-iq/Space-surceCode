import '../../../assets/Styles/components/common/Article.css';

type StatusProps = {
    header: string,
    presentation: string,
    description: string
}

const Article = (props: StatusProps) => {
    return (
        <article className="article-component">
            <p className="presentation">{props.presentation.toLocaleUpperCase()}</p>
            <h1 className="header">{props.header.toLocaleUpperCase()}</h1>
            <p className="description">{props.description}</p>
        </article>
    )
}
export default Article;
