import React from 'react'
import "../Styles/tasks.css"

const Tasks = () => {
  return (
    <div>
        <table>
      <thead>
        <tr>
          <th>Employee Name</th>
          <th>Job Role</th>
          <th>Department</th>
          <th>salary</th>
          <th>Contact Email</th>
          <th>Work Experience</th>
          <th>Role Type</th>
          <th>Fire Employee</th>
        </tr>
      </thead>
      <tbody>     
        {/* <!-- Append all the rows here  --> */}
      </tbody>
    </table>
    </div>
  )
}

export default Tasks