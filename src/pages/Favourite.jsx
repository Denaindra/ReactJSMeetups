import { useContext } from "react";
import favouriteCtx from "../store/favourite-context";
import MeetupList from "../componet/meetup/MeetupList";

const Favourite = () => {
  const favouritectx = useContext(favouriteCtx);
    var body = ""
  if (favouritectx.favourite.length == 0)
  {
     body =  <span>You didn't have saved favourite items</span>
  }
  else{
      body = <MeetupList data={favouritectx.favourite} />
  }
  return (
    <div>
      {body}
    </div>
  );
};

export default Favourite;
