import React from 'react'
import { Link } from 'react-router-dom'

export default function AllQuestions() {
	return (
		<div>
			<div className="card">
				<div className="card-header d-flex justify-content-between">
					All Questions 

					<Link to="/int-quest" className="btn btn-outline-primary">
						Add New
					</Link>
				</div>
			</div>
		</div>
	)
}
