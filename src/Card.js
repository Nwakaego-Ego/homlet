import "./Card.css";

export default function Card({
  imagePath,
  tag,
  info,

  price,
  address,
}) {
  return (  
    <div className="card-wrapper">
      <div className="card-img">
        <img src={imagePath} alt="card"/>
      </div>
      <div className={tag === "Flat Owner" ? "tag-green" : "tag-orange"}>
        {tag}
      </div>
      <div className="card-texts">
        <div className="card-texts-top">
          <p>{info}</p>
          <p>Send Flatquest</p>
        </div>
        <p className="card-p">{price}</p>
        <p className="card-p">{address}</p>
      </div>
    </div>
  );
}
