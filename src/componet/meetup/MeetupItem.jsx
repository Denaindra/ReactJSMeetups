import { useContext } from "react";
import classes from "../../css/MeetupItem.module.css";
import Card from "../CardWapper/Card";
import favouritesCtx from "../../store/favourite-context";

const MeetupItem = (props) => {
  const { id, image, title, address, description } = props.meetup;

  const favouritectx = useContext(favouritesCtx);
  const isExsit = favouritectx.itemIsFavourite(id);

  function AddToFavourite() {
    if (isExsit) {
      favouritectx.removeFavourite(id);
    } else {
      favouritectx.addFavourite(props.meetup);
    }
    console.log(id,favouritectx.favourite)
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={image} alt={title} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={AddToFavourite}>
            {isExsit ? "Remove from favourite" : "Add to favourite List"}
          </button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
