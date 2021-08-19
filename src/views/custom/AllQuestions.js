import { CButton, CDataTable } from '@coreui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function AllQuestions() {
	const AllQuestions = [

	]
	const fields = [
		{key: 'id'},
		{ key: 'category', },
		{ key: 'question', },
		{ key: 'number', label: 'Number of Keywords' },
		{ key: 'used', label: 'Number of Keywords' },
		// {key: 'notified',filter: false },
		// {key: 'result'},
		// {key: 'videolink',filter: false , _style: {width: "50px"}, sorter: false},
	  ]

	  
	return (
		<div className="card px-3">
			<div className="card-header d-flex justify-content-between ">
				<h4 className="mb-0 card-title"> All Questions  </h4> 
				<Link className="btn btn-info " to="/result"> Add New </Link>
			</div>
			<CDataTable
			items={AllQuestions}
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
