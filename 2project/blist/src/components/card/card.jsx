import style from "./card.module.css";

const Card = (props) => {
  return (
    <div className={style.card}>
      <img className={style.slika} src="" alt="" />
      <p className={style.title}> {props.title} </p>
      <p className={style.author}> {props.author} </p>
    </div>
  );
};

export default Card;
