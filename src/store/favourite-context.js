import { createContext, useState } from "react";

 const FavouritesContext = createContext({
  favourite: [],
  totalFavourite: 0,
  addFavourite: (favouriteMeetup) => {},
  removeFavourite: (meetingId) => {},
  itemIsFavourite: (meetingId) => {},
});

export function FavouriteContextProvider(props) {
  const [userFavourite, setUserFavourite] = useState([]);

  function addFavouriteHandler(favouriteMeetup) {
    setUserFavourite((previoursMeetingups) => {
      return previoursMeetingups.concat(favouriteMeetup);
    });
  }

  function removeFavouriteHandler(meetingId) {
    setUserFavourite((previoursMeetingups) => {
      return previoursMeetingups.filter((meeting) => meeting.id !== meetingId);
    });
  }

  function itemIsFavouriteHadler(meetingId) {
    return userFavourite.some((meeting) => meeting.id === meetingId);
  }

  const context = {
    favourite: userFavourite,
    totalFavourite: userFavourite.length,
    addFavourite: addFavouriteHandler,
    removeFavourite: removeFavouriteHandler,
    itemIsFavourite: itemIsFavouriteHadler,
  };

  return (
    //retrive the update in the all componets and point to value
    <FavouritesContext.Provider value={context}>
      {props.children}
    </FavouritesContext.Provider>
  );
}

export default FavouritesContext;
