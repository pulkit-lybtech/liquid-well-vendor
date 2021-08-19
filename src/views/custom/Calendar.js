import React from "react";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const times = [1, 2, 3, 4, 5, 6, 7, 8];

function Calendar() {
  const [selectedTime, setSelectedTime] = React.useState(new Array(7).fill(0));
  const [selectedDay, setSelectedDays] = React.useState(new Array(7).fill(0));

  const timeInt = 9;

  selectedDay.fill(0);

  return (
    <div className="calendar">
      <div className="card">
        <div className="card-header text-center d-flex justify-content-center ">
          <strong>Select Time Availability </strong>
        </div>
        <div className="card-body">
          <h5 className="card-subtitle h6">
            Please select what time of the day, you will be available for
            Interviews
          </h5>

          <table className="table table mt-3 table-bordered table-striped ">
            <thead className="border-bottom">
              <tr>
                <th style={{ width: "100px" }}> &nbsp; </th>
                {days.map((day) => {
                  return <th  key={day}> {day}</th>;
                })}
              </tr>
            </thead>
            <tbody>
              {times.map((time) => {
                return (
                  <tr key={time}>
                    	<td> {((time + timeInt) < 10) ? ((time + timeInt) > 12 ? time + ":00 AM" : time +":00 PM ") : (time )+ ":00 AM"    } </td>
						{
							selectedDay.map((item,i)=> {
								return(
									<td className="p-0">
										<button onClick={setSelectedDays[prevItem => [...prevItem, 1]]} className={ ( item == 0 ) ? "bg bg-warning " : "bg bg-light" }>
											&nbsp;
											{selectedDay[item+1]}
										</button>
									</td>
								)
							})
						}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Calendar;
