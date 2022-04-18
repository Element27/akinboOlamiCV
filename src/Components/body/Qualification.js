import React from "react";

const Qualification = () => {
  return (
    <div className="section-main">
      <div className="section-body">
        <table>
          <caption>Academic Qualification</caption>
          <thead>
            <tr>
              <th>Qualification</th>
              <th>Institution</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>(HND) Mass Communication </td>
              <td>Yaba College of Technology, Lagos</td>
              <td>2019</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="section-body">
        <table>
          <caption>Certifications</caption>
          <thead>
            <th>Certificates</th>
            <th>Institution</th>
            <th>Year</th>
          </thead>
          <tbody>
            <tr>
              <td>(Certificate of Completion) Graphics Design</td>
              <td>Upskill Digital Market</td>
              <td>2019</td>
            </tr>
            <tr>
              <td>(Certificate of Completion) Web Dev. (Nodejs)</td>
              <td>Progate X DevCareer</td>
              <td>2022</td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
    // certification
  );
};

export default Qualification;
