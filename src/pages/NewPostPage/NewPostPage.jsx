import { useNavigate} from "react-router-dom";
import { useState } from "react";
import calculateReadTime from "../../helpers/calculateReadTime";

function NewPostPage() {

    const [author, setAuthor] = useState("")
    const [title, setTitle] = useState("")
    const [subtitle, setSubtitle] = useState("")
    const [content, setContent] = useState("")
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        console.log({
            author: author,
            title: title,
            subtitle: subtitle,
            content: content,
            comments: 0,
            shares: 0,
            created: new Date().toISOString(),
            readTime: calculateReadTime(content),
        });
        navigate("/overview");
    }

    return (
        <>
        <h1>New blogpost</h1>
        <form onSubmit={handleSubmit} >
            <label htmlFor="author">Author</label>
            <input type="text" id="author" name="author" value = {author} onChange={(e) => setAuthor(e.target.value)} required />
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" value = {title} onChange={(e) => setTitle(e.target.value)} required />
            <label htmlFor="subtitle">Subtitle</label>
            <input type="text" id="subtitle" name="subtitle" value = {subtitle} onChange={(e) => setSubtitle(e.target.value)} required />
            <label htmlFor="content">Content</label>
            <textarea id="content" name="content" rows="10" cols="50" value = {content} onChange={(e) => setContent(e.target.value)} required minLength={300} maxLength={2000} ></textarea>
            <button type="submit">Verzenden</button>
        </form>
        </>
    )
}

export default NewPostPage;