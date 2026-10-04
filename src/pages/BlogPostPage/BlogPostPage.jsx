import {useParams} from "react-router-dom";

function BlogPostPage() {
    const {id} = useParams();

    return (
        <h1>Blogpost {id}</h1>
    )
}

export default BlogPostPage;