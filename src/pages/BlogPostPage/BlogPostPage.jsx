import { Link, useParams} from "react-router-dom";
import blogposts from '../../constants/data.json'
import formatDate from "../../helpers/formatDate";

function BlogPostPage() {
    const {id} = useParams();
    const blogpost = blogposts.find((post) => post.id === Number(id));
    console.log(blogpost);

    return (
        <>
            <article>
                <h1>{blogpost.title} ({blogpost.readTime} minuten)</h1>
                <h2>{blogpost.subtitle}</h2>
                <p>Geschreven door {blogpost.author} op {formatDate(blogpost.created)}</p>
                <p>{blogpost.content}</p>
                <p>{blogpost.comments} reacties - {blogpost.shares} keer gedeeld</p>
                <Link to ={`/overview/`}><p>Terug naar overzichtspagina</p></Link>            </article>
        </>

    )
}

export default BlogPostPage;