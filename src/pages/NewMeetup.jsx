import NewMeetupForm from "../componet/meetup/NewMeetupForm";
import * as Constant from "../Constant/Constant";
import { useNavigate } from "react-router-dom";

const NewMeetup = () => {
  const navigate = useNavigate();

  async function AddToServices(meetupData) {
    const response = await fetch(Constant.URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(meetupData),
    }).then(
      navigate("../")
    );
  }

  return (
    <div>
      <h1>Add New Meetup Here</h1>
      <NewMeetupForm AddToServices={AddToServices} />
    </div>
  );
};

export default NewMeetup;
