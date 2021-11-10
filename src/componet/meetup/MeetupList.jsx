import classes from "../../css/MeetupList.module.css";
import MeetupItem from "./MeetupItem";

const MeetupList = (props) => {
  return (
    <ul className={classes.list}>
      {props.data.map((meetup) => (
          
        <MeetupItem meetup={meetup} key={meetup.id} />
      ))}
    </ul>
  );
};

export default MeetupList;
