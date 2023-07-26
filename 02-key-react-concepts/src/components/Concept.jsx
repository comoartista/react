import './Concept.css'
function Card({title, image, description,alt}) {
  return (
    <>
      <li className="concept">
        <img src={image} alt={alt} />
        <h2>{title}</h2>
        <p>{description}</p>
      </li>
    </>
  )
}

export default Card;