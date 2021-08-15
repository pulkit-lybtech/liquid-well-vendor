import React from 'react'
import './avail.scoped.scss'
import { CButton, CFormCheck, CInputCheckbox, CLabel } from '@coreui/react'

export default function Availability() {

	const [step, setStep] = React.useState(1)

	switch (step) {
		case 1:
			return (
				<div className="card avail">
					<div className="card-header">Step 1 </div>
					<div className="card-body">
						<h4 className="card-title mb-4">
							Select Your Expertise/Category
						</h4>
						<label htmlFor="#">
							Choose a category
							<select name="category" id="cat" className="custom-select">
								<option value="">Visa</option>
								<option value="">HR </option>
								<option value="">Other </option>
							</select>
						</label>
						<small className="text-muted d-block ">
							Please select a category to continue.
						</small>
					</div>
					<div className="card-footer">
						<button onClick={() => { setStep(2) }} className="btn ml-auto btn-outline-dark">
							Next
						</button>
					</div>
				</div>
			)
		case 2:
			return (
				<div className="card">
					<div className="card-header">Step 2 </div>
					<div className="card-body">
						<h4 className="card-title mb-4">
							Select Countries
						</h4>

						{/* countries list  */}
						<div className="col">
							<div class="custom-control custom-checkbox">
								<input type="checkbox" class="custom-control-input" id="customCheck1" />
								<label class="custom-control-label" for="customCheck1"> U.S.A </label>
							</div>
							<div class="custom-control custom-checkbox">
								<input type="checkbox" class="custom-control-input" id="customCheck2" />
								<label class="custom-control-label" for="customCheck2"> CANADA </label>
							</div>
							<div class="custom-control custom-checkbox">
								<input type="checkbox" class="custom-control-input" id="customCheck3" />
								<label class="custom-control-label" for="customCheck3"> U.K </label>
							</div>
						</div>

						<h4 className="card-title mb-4">
							Select Categories  
						</h4>
						{/* countries list  */}
						<div className="col px-4">
							<div className="row row-cols-md-3 row-cols-2 row-cols-lg-4">
								<div class="custom-control custom-checkbox">
									<input type="checkbox" class="custom-control-input" id="asd" />
									<label class="custom-control-label" for="asd"> B1 </label>
								</div>
								<div class="custom-control custom-checkbox">
									<input type="checkbox" class="custom-control-input" id="asdA" />
									<label class="custom-control-label" for="asdA"> B2 </label>
								</div>
								<div class="custom-control custom-checkbox">
									<input type="checkbox" class="custom-control-input" id="sdfsdfs" />
									<label class="custom-control-label" for="sdfsdfs"> B1/B2 </label>
								</div>
								<div class="custom-control custom-checkbox">
									<input type="checkbox" class="custom-control-input" id="sdfsdf" />
									<label class="custom-control-label" for="sdfsdf"> F1 </label>
								</div>
								<div class="custom-control custom-checkbox">
									<input type="checkbox" class="custom-control-input" id="sdfsdfd" />
									<label class="custom-control-label" for="sdfsdfd"> H </label>
								</div>
								<div class="custom-control custom-checkbox">
									<input type="checkbox" class="custom-control-input" id="zxc" />
									<label class="custom-control-label" for="zxc"> O </label>
								</div>
								<div class="custom-control custom-checkbox">
									<input type="checkbox" class="custom-control-input" id="P" />
									<label class="custom-control-label" for="P"> P </label>
								</div>
								<div class="custom-control custom-checkbox">
									<input type="checkbox" class="custom-control-input" id="Q" />
									<label class="custom-control-label" for="Q"> Q </label>
								</div>
							</div>
						</div>


					</div>
					<div className="card-footer d-flex">
						<button onClick={() => { setStep(1) }} className="btn btn-outline-dark">
							Previous
						</button>
						<button onClick={() => { setStep(3) }} className="btn btn-outline-dark">
							Next
						</button>
					</div>
				</div>
			)
		case 3:
			return (
				<div className="card">
					<div className="card-header">Step 3 </div>
					<div className="card-body">
						<h4 className="card-title mb-4">
							How many Years of Experience you have?
						</h4>
						<label htmlFor="#">
							Select Your Total Years of Experience
							<select name="category" id="cat" className="custom-select">
								<option value="">1 Year</option>
								<option value="">2 - 3 Years </option>
								<option value="">3 - 4 Years </option>
								<option value="">4 - 5 Years </option>
								<option value="">5 - 6 Years </option>
								<option value="">6 - 7 Years </option>
								<option value="">7 - 8 Years </option>
								<option value="">8 - 9 Years </option>
							</select>
						</label>
						<div className="alert alert-success">
						
								Successfully enrolled for <strong>USA </strong>
								for <strong>B1</strong>,<strong>B2</strong> VISA
						
						</div>
					</div>
					<div className="card-footer">
						<button onClick={() => { setStep(2) }} className="btn btn-outline-dark">
							Previous
						</button>
						<button  className="btn btn-primary">
							Save and Continue
						</button>
					</div>
				</div>
			)
		default:
			return (
				<div className="card">

				</div>
			)
	}
}
