import './CardServices.css'
export function CardServices({ img, title, description }) {
  return (
    <>
      <div className="CardServices">
        <img src={img}></img>
        <span>{title}</span>
        <p>{description}</p>
      </div>
    </>
  );
}
