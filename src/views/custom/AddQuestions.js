import React from 'react'

export default function AddQuestions() {
	return (
		<div>
			<div className="card col-xl-4 ">
				<div className="card-header">
					Add New Questions 
				</div>
				<div className="card-body">
					<label htmlFor="#" className="form-group px-0 col-12">
						Type Question
						<textarea type="text" className="form-control "></textarea>
					</label>
					<label htmlFor="#" className="form-group px-0 col-12">
						Enter a Category: 
						<input type="text" className="form-control" />
					</label>
					<button className="btn btn-primary"> Submit </button>
				</div>
			</div>
		</div>
	)
}
