export default function Form() {
    return <>
        <div className="container bg-dark text-warning">
            <div className="heading">
                <h1 className="text-center">Your Application Form</h1>
            </div>
                <table className="table">
                    <tbody>
                        <thead>
                            <tr>
                                <td>Your First Name</td>
                                <td>Your Last Name</td>
                                <td>Your Email</td>
                                <td>Your Phone Number</td>
                                <td>Your age</td>
                                <td>Your Photo</td>
                            </tr>
                        </thead>
                    </tbody>
                </table>
        </div>
    </>
};