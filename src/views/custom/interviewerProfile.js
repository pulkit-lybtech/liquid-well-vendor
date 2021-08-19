import { CChart } from '@coreui/react-chartjs'
import React, { useState } from 'react'
import { FaPlay, FaVideoSlash, FaMicrophone,FaMicrophoneSlash, FaVideo  } from 'react-icons/fa'

function  InterviewerProfile()  {
	
	// STATEs /////////////////////// 
	const [ isMute, setIsMute ] = useState(false)
	const [isVideo, setIsVideo ] = useState(false)

	const datasets = [
		{
		  label: 'Reports ',
		  fill: false,
		  lineTension: 0.1,
		  backgroundColor: 'rgba(75,192,192,0.4)',
		  borderColor: 'rgba(75,192,192,1)',
		  borderCapStyle: 'butt',
		  borderDash: [],
		  borderDashOffset: 0.0,
		  borderJoinStyle: 'miter',
		  pointBorderColor: 'rgba(75,192,192,1)',
		  pointBackgroundColor: '#fff',
		  pointBorderWidth: 1,
		  pointHoverRadius: 5,
		  pointHoverBackgroundColor: 'rgba(75,192,192,1)',
		  pointHoverBorderColor: 'rgba(220,220,220,1)',
		  pointHoverBorderWidth: 2,
		  pointRadius: 1,
		  pointHitRadius: 10,
		  data: [65, 59, 80, 81, 56, 55, 40],
		},
	  ]

	  const options = {
		// tooltips: {
		//   enabled: false,
		//   custom: customTooltips
		// },
		maintainAspectRatio: false
	  }

	return (	
		

		<div>
			<div className="card">
				
				<div className="card-body position-relative">
					<div style={{minHeight: "70vh"}} className="alert rounded-lg bg-secondary">

					</div>

					<div  style={{minHeight: "160px", width: "240px", top: "2rem", right: "2rem"}} className="shadow position-absolute rounded-lg bg-dark">
						
					</div>



					<div className="poly-lines">
						<CChart type="line" datasets={datasets} options={options} />

					</div>


					<div className="button-group call-controls justify-content-center my-4">
						<button className="btn btn-pill ">
							<FaPlay />
						</button>

						{
							isMute ? <button onClick={() => setIsMute(false)} className={isMute ? "btn btn-pill active" : "btn btn-pill"}>
								<FaMicrophone size={ 24 } />  
							</button> : 
							<button onClick={() => setIsMute(true)} className={isMute ? "btn btn-pill bg-danger" : "btn btn-pill"}>
								<FaMicrophoneSlash size={ 24 } />  
							</button>
						}
						

						{
							isVideo ? <button onClick={() => setIsVideo(false)} className={isVideo ? "btn btn-pill active" : "btn btn-pill"}>
								<FaVideo size={ 24 } />  
							</button> : 
							<button onClick={() => setIsVideo(true)} className="btn btn-pill ">
								<FaVideoSlash size={ 24 } />  
							</button>
						}
				

					</div>
				</div>
			</div>
		</div>
	)
}




export default InterviewerProfile