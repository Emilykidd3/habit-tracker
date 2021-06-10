import React from "react";
import moment from "moment";

const HabitTracker = () => {
  const habit = {
    name: "Gym",
    days: ["2021-05-25", "2021-05-26", "2021-05-27", "2021-05-28"],
  };

  let daysRecorded = habit.days;
  let dayGrids = [];
   for (let i = 0; i < 365; i++) {
    let dayGridDate = moment().subtract(i, "days").format("YYYY-MM-D");
    if (dayGridDate.toString() === daysRecorded[daysRecorded.length - 1]) {
      dayGrids.unshift(<div className="day day--active" key={i} />);
    } else {
      dayGrids.unshift(<div className="day" key={i} />);
    }
  }
  return (
    <div style={{ width: "95%", margin: "auto auto" }}>
      <div style={{ textAlign: "center" }}>
        <h4>{habit.name}</h4>
      </div>
      <div className="days">{dayGrids}</div>
    </div>
  );
};

export default HabitTracker;
