import * as Constant from "../Constant/Constant";

export function GetMeetingList() {
    return fetch(Constant.URL)
      .then(response => response.json())
  }