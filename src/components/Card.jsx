function Card({ icon, title, description, link }) {
  return (
    <article className="card">
      <div className="card-icon" aria-hidden="true">
        {icon}
      </div>

      <h2>{title}</h2>
      <p>{description}</p>

      <a href={link} target="_blank" rel="noreferrer">
        Learn More
      </a>
    </article>
  )
}

export default Card
