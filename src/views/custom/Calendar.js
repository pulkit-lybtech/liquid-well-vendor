import React from 'react'

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
const time = [1,2,3,4,5,6,7,8]

function Calendar() {
	return (
		<div className="calendar">
			<div className="card">
				<div className="card-header text-center d-flex justify-content-center ">
					<strong>Select Time Availability </strong>
				</div>
				<div className="card-body">
					<h5 className="card-subtitle">
						Please select what time of the day, you will be available for Interviews
					</h5>

					<table className="table-responsive table mt-5 table-borderless ">
						<thead className="border-bottom">
							<tr>
								<th> &nbsp; </th>
								{
									days.map((day) => {
										return (
											<th>{day}</th>
										)
									})
								}
							</tr>
						</thead>
						<tbody>
							<tr>
								
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	)
}

export default Calendar
