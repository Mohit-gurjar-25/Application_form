export default function AllData(props) {
    return <>

        <div className="container bg-dark">
            <div className="heading">
                <h1 className="text-center text-warning">All Students</h1>
            </div>
            <table className="table text-warning">
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
                    {props.allData.map((list, index) => <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{list.user_fname}</td>
                        <td>{list.user_lname}</td>
                        <td>{list.user_course}</td>
                        <td>{list.user_phone}</td>
                        <td>{list.user_age}</td>
                        <td>{list.user_dob}</td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    </>
};