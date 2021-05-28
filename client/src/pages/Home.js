import React from 'react';
import moment from 'moment'

const Home = () => {
    const habit = {name: 'gym', days: ["2021-05-25", "2021-05-26", "2021-05-27"]}

    let daysRecorded = habit.days;
    let dayGrids = [];
    for (let i = 0; i < 365; i++) {
        let dayGridDate = moment().subtract(i, 'days').format("YYYY-MM-D");
        if (dayGridDate.toString() === daysRecorded[daysRecorded.length - 1]) {
            dayGrids.unshift(<div className="day day--active" kay={i} />);
        } else {
            dayGrids.unshift(<div className="day" kay={i} />);
        }
    }
    return(
        <div>
            <div>
                <p>{habit.name}</p>
            </div>
            <div className="days">{dayGrids}</div>
        </div>
    )
}

export default Home;