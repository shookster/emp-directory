import React from "react";

function EmployeeData({ users }) {
    function formatDate(date) {
        const dateArray = date.split("-");
        const year = dateArray[0];
        const month = dateArray[1];
        const dayArray = dateArray[2].split("T");
        const day = dayArray[0];
        const formattedDate = [month, day, year].join("-");
        return formattedDate;
    }


// function EmployeeTable ({ heading}) {
//     return (
//             <table>
//                 <thead>
//                     <tr>
//                         {heading.map(({name})=> {
//                             return (
//                                 <th>
//                                     {name}
//                                 </th>
//                             )
//                         })}
//                     </tr>
//                 </thead>
//                 <tbody>
    return (
        <tbody>
                    {users[0] !== undefined && users[0].name !== undefined ? (
                        users.map(({ login, name, picture, phone, email, dob}) => {
                            return (
                                <tr key={login.uuid}>
                                    <td dat-th="Image" className="align-middle">
                                        <img
                                        src={picture.medium}
                                        alt={"profile image for " + name.first + " " + name.last}
                                        className="img-responsive"
                                        />
                                    </td>
                                    <td dat-th="Phone" className="align-middle">
                                        {name.first} {name.last}
                                    </td>
                                    <td data-th="Phone" className="align-middle">
                                        {phone}
                                    </td>
                                    <td dat-th="Email" className="align-middle">
                                        <a href={"mailto:" + email} target="__blank">
                                            {email}
                                        </a>
                                    </td>
                                    <td data-th="DOB" className="align-middle">
                                        {formatDate(dob.date)}
                                    </td>
                                </tr>
                            );
                        })
                    ) : (
                        <>
                        </>
                    )}
             </tbody>
            // </table>
    )
}

export default EmployeeData