import React from 'react'
import { FaPlay } from 'react-icons/fa'
export default function interviewerProfile() {
	return (
		<div>
			<div className="card">
				
				<div className="card-body position-relative">
					<div style={{minHeight: "70vh"}} className="alert rounded-lg bg-secondary">

					</div>

					<div  style={{minHeight: "160px", width: "240px", top: "2rem", right: "2rem"}} className="shadow position-absolute rounded-lg bg-dark">
						
					</div>

					<div className="button-group call-controls justify-content-center my-4">
						<button className="btn btn-pill ">
							<FaPlay />
						</button>
						<button className="btn btn-pill  ">
							Pause  
						</button>
						<button className="btn btn-pill  ">
							Stop  
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
