import blogposts from '../../constants/data.json'
import { Link } from 'react-router-dom'

function OverviewPage() {

    console.log(blogposts)

    return (
        <>
        <section>
        <h1>Overview page of all blogposts</h1>
        <p>Totaal aantal blogposts: {blogposts.length}</p>
        </section>
            <section className="blogposts">
                <ul>
                    {blogposts.map((blogpost) => (<li key={blogpost.id}><p><Link to={`/blogpost/${blogpost.id}`}>{blogpost.title}</Link> - {blogpost.author}</p> <p>{blogpost.comments} reacties - {blogpost.shares} keer gedeeld</p></li>))}
                </ul>
            </section>
        </>
    )
}

export default OverviewPage;