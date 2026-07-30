export default function Highlights() {

  const posts = [1,2,3]

  return (
    <div className="card">

      <h3>Destaques</h3>

      <div className="highlights">

        {posts.map((post) => (

          <div className="highlight-card" key={post}>
            <img src="https://picsum.photos/300/200"/>
            <p>Legenda da publicação...</p>
          </div>

        ))}

      </div>

    </div>
  )
}