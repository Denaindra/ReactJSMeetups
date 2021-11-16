import { useState, useEffect } from "react";
import MeetupList from "../componet/meetup/MeetupList";
import  {GetMeetingList}  from "../Services/Service";

const AllMeetup = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);
 

  useEffect(() => {  // avoid multiple looping
    setIsLoading(true);
    GetMeetingList().then((data) => {
      const meetups = [];
      for (const key in data) {
        const meetup = {  // re aranged the existing arrya
          id: key,
          ...data[key],
        };
        meetups.push(meetup);
      }
      setIsLoading(false);
      setLoadedMeetups(meetups);
    });
  }, []); //set empty for all dependecyies

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <div>
      <h1>All meetup</h1>
      <MeetupList data={loadedMeetups} />
    </div>
  );
};

export default AllMeetup;
