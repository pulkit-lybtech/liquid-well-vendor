import React from "react";

export default function Settings() {
  return (
    <div className="setting">
      <h3 className="title mb-3">Settings</h3>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">General Settings</h5>
          <div className="form">
            <label htmlFor="#" className="form-group">
              Name
              <input type="text" className="form-control" />
            </label>
            <label htmlFor="#" className="form-group">
              Email
              <input type="email" className="form-control" />
            </label>
            <label htmlFor="#" className="form-group">
              Phone Number
              <input type="email" className="form-control" />
            </label>
            <label htmlFor="#" className="form-group">
              Gender
              <select name="#" id="#" className="custom-select">
                <option defaultChecked value="1">
                  select
                </option>
                <option value="">Male</option>
                <option value="">Female</option>
              </select>
            </label>
          </div>
        </div>
       
        <div className="card-body">
          <h5 className="card-title"> 
                Other Info
          </h5>
          <div className="form">
            <label htmlFor="#" className="form-group">
                    Tell us something About Yourself 
                <textarea name="" id="" cols="32" rows="" className="form-control">

                </textarea>
            </label>
          </div>
        </div>

        <div className="card-body">
          <h5 className="card-title mb-0"> 
                Social Media Links 
          </h5>
          <small className="text-muted">
            Add social media links here!
          </small>
          <div className="form mt-3">
            <label htmlFor="#" className="form-group">
                Facebook 
                <input type="text" className="form-control" />
            </label>
            <label htmlFor="#" className="form-group">
                Twitter 
                <input type="text" className="form-control" />
            </label>
            <label htmlFor="#" className="form-group">
                Linkedin 
                <input type="text" className="form-control" />
            </label>

          </div>
        </div>

        <div className="card-footer d-flex justify-content-end ">
            <button className="btn px-4 mr-3 btn-light">
                Cancel 
            </button>
            <button className="btn px-5 mr-3 btn-primary">
                Save 
            </button>
        </div>


      </div>
    </div>
  );
}
