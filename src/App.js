import { useState, useRef, useEffect } from "react"
import AllData from "./AllData";

// get data from local storage 
const savedData = () => {
  let saved_list = localStorage.getItem('user_list');
  if (saved_list) {
    return JSON.parse(localStorage.getItem('user_list'));
  } else {
    return [];
  }
}

export default function App() {
  const [allData, setallData] = useState(savedData());
  const [data, setData] = useState([]);
  const [all, setAll] = useState(false)
  const first_name = useRef()
  const last_name = useRef()
  const coursebox = useRef()
  const phonebox = useRef()
  const agebox = useRef()
  const birthbox = useRef()

  const all_list = () => {
    setAll(true)
  }
  //save the data 
  const save = (event) => {
    event.preventDefault()
    var user_fname = first_name.current.value
    var user_lname = last_name.current.value
    var user_course = coursebox.current.value
    var user_phone = phonebox.current.value
    var user_age = agebox.current.value
    var user_dob = birthbox.current.value

    // create object of data
    const user_data = { user_fname, user_lname, user_course, user_phone, user_age, user_dob }
    setData([...data, user_data])
    setallData([...allData, user_data])
    event.target.reset()
  }
  // save data to local storage
  useEffect(() => {
    localStorage.setItem('user_list', JSON.stringify(allData))
  }, [allData]);

  
  return <> {all == true ? <AllData allData={allData} /> : <>
    <div className="container bg-dark text-warning">
      <div className="heading">
        <h1 className="text-center">Application From</h1>
      </div>
      <form onSubmit={save}>
        <div className="row mt-5">
          <div className="col-lg-6 row-md-6">
            <input type="text" className="form-control" ref={first_name} required placeholder="Enter Your First Name" />
          </div>
          <div className="col-lg-6 row-md-6">
            <input type="text" className="form-control" ref={last_name} required placeholder="Enter Your Last Name" />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-lg-6 row-md-6">
            <select ref={coursebox} required className="form-control">
              <option>Choose Your Course</option>
              <option>B.Tech.</option>
              <option>B.E.</option>
              <option>B.Com.</option>
              <option>B.Sc.</option>
              <option>BCA</option>
            </select>
          </div>
          <div className="col-lg-6 row-md-6">
            <input type="text" className="form-control" required ref={phonebox} placeholder="Enter Your Phone Number" />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-lg-6 row-md-6">
            <input type="text" className="form-control" required ref={agebox} placeholder="Enter Your Age" />
          </div>
          <div className="col-lg-6 row-md-6">
            <input type="date" title="Choose Your Date Of Birth" required className="form-control" ref={birthbox} />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-lg-6 row-md-6">
            <button className="btn btn-success">Submit</button>
          </div>
        </div>
      </form>
      <div className="row mt-3">
        <div className="col-lg-6 row-md-6">
          <button onClick={all_list} className="btn btn-success">All Students</button>
        </div>
      </div>
      <hr />
      {data.length == 0 ? '' : <table className="table text-warning">
        <thead className="text-light">
          <tr>
            <th>S. No.</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Course</th>
            <th>Phone</th>
            <th>Age</th>
            <th>DOB</th>
          </tr>
        </thead>
        <tbody>
          {data.map((list, index) => <tr key={index}>
            <td>{index + 1}</td>
            <td>{list.user_fname}</td>
            <td>{list.user_lname}</td>
            <td>{list.user_course}</td>
            <td>{list.user_phone}</td>
            <td>{list.user_age}</td>
            <td>{list.user_dob}</td>
          </tr>)}
        </tbody>
      </table>}
    </div>
  </>};
  </>
};