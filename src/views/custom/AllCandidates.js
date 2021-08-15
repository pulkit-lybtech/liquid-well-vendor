import { CButton, CDataTable } from '@coreui/react'
import React from 'react'
import { Link } from 'react-router-dom'


const resultData = [
	{id: 0, candidate_name: 'Rajat Kumar ', scheduled_on: '27/12/2021',scheduled_for: '27 Feb 2021', usage: '2',category: "B1/B2 USA",videolink: "", },
	{id: 0, candidate_name: 'Rajat Kumar ', scheduled_on: '27/12/2021',scheduled_for: '27 Feb 2021', usage: '2',category: "B1/B2 USA",videolink: "", },
	{id: 0, candidate_name: 'Rajat Kumar ', scheduled_on: '27/12/2021',scheduled_for: '27 Feb 2021', usage: '2',category: "B1/B2 USA",videolink: "", },
	{id: 0, candidate_name: 'Rajat Kumar ', scheduled_on: '27/12/2021',scheduled_for: '27 Feb 2021', usage: '2',category: "B1/B2 USA",videolink: "", },
	{id: 0, candidate_name: 'Rajat Kumar ', scheduled_on: '27/12/2021',scheduled_for: '27 Feb 2021', usage: '2',category: "B1/B2 USA",videolink: "", },
	{id: 0, candidate_name: 'Rajat Kumar ', scheduled_on: '27/12/2021',scheduled_for: '27 Feb 2021', usage: '2',category: "B1/B2 USA",videolink: "", },
	{id: 0, candidate_name: 'Rajat Kumar ', scheduled_on: '27/12/2021',scheduled_for: '27 Feb 2021', usage: '2',category: "B1/B2 USA",videolink: "", },
	{id: 0, candidate_name: 'LALA Kumar ', scheduled_on: '27/12/2021',scheduled_for: '27 Feb 2021', usage: '2',category: "B1/B2 USA",videolink: "", },
	{id: 0, candidate_name: 'Rajat Kumar ', scheduled_on: '27/12/2021',scheduled_for: '27 Feb 2021', usage: '2',category: "B1/B2 USA",videolink: "", },
	{id: 0, candidate_name: 'Rajat Kumar ', scheduled_on: '27/12/2021',scheduled_for: '27 Feb 2021', usage: '2',category: "B1/B2 USA",videolink: "", },
	{id: 0, candidate_name: 'Rajat Kumar ', scheduled_on: '27/12/2021',scheduled_for: '27 Feb 2021', usage: '2',category: "B1/B2 USA",videolink: "", },
	{id: 0, candidate_name: 'Rajat Kumar ', scheduled_on: '27/12/2021',scheduled_for: '27 Feb 2021', usage: '2',category: "B1/B2 USA",videolink: "", },
	{id: 0, candidate_name: 'Rajat Kumar ', scheduled_on: '27/12/2021',scheduled_for: '27 Feb 2021', usage: '2',category: "B1/B2 USA",videolink: "", },
	{id: 0, candidate_name: 'Rajat Kumar ', scheduled_on: '27/12/2021',scheduled_for: '27 Feb 2021', usage: '2',category: "B1/B2 USA",videolink: "", },
	{id: 0, candidate_name: 'Rajat Kumar ', scheduled_on: '27/12/2021',scheduled_for: '27 Feb 2021', usage: '2',category: "B1/B2 USA",videolink: "", },
	{id: 0, candidate_name: 'Rajat Kumar ', scheduled_on: '27/12/2021',scheduled_for: '27 Feb 2021', usage: '2',category: "B1/B2 USA",videolink: "", },
	{id: 0, candidate_name: 'Rajat Kumar ', scheduled_on: '27/12/2021',scheduled_for: '27 Feb 2021', usage: '2',category: "B1/B2 USA",videolink: "", },
	{id: 0, candidate_name: 'Rajat Kumar ', scheduled_on: '27/12/2021',scheduled_for: '27 Feb 2021', usage: '2',category: "B1/B2 USA",videolink: "", },

  ]


 

const fields = [
	{key: 'id'},
	{ key: 'candidate_name', },
	'scheduled_on',
	'scheduled_for',
	'category',
	// {key: 'notified',filter: false },
	// {key: 'result'},
	{key: 'videolink',filter: false , _style: {width: "50px"}, sorter: false},
  ]

const AllInterviews = () =>  {
	  
return (
	
	<div className="card px-3">
		<div className="card-header d-flex justify-content-between ">
			<h4 className="mb-0 card-title"> All Candidates  </h4> 
			<Link className="btn btn-info " to="/schedule-int"> Add New </Link>
		</div>
		<CDataTable
		items={resultData}
		fields={fields}
		tableFilter
		itemsPerPageSelect
		itemsPerPage={5}
		hover
		sorter
		pagination
		scopedSlots = {{
			
			
			'videolink':
			  (item)=>(
				<td className="">
					<CButton to="add-int" Link size="sm" variant="outline" color="dark">
						Show 
					</CButton>
				</td>
			  ),
			// 'show_details':
			//   (item, index)=>{
			// 	return (
			// 	  <td className="py-2">
			// 		<CButton
			// 		  color="primary"
			// 		  variant="outline"
			// 		  shape="square"
			// 		  size="sm"
			// 		  onClick={()=>{toggleDetails(index)}}
			// 		>
			// 		  {details.includes(index) ? 'Hide' : 'Show'}
			// 		</CButton>
			// 	  </td>
			// 	  )
			//   },
			
		  }}
		/>
	
	</div>
)
 }


 export default AllInterviews;