import React from "react";
import "./section.css";
import "../header/HeadSection.css";

const Skills = () => {
  return (
    // shares the same styling as the header container in the header component folder
    <div className="section-main">
      <div className="section-body">
        <ul className="outer-ul">
          <li>
            <h4>Technical Skills</h4>

            <ul className="inner-ul">
              <li>
                <h4>Web Development</h4>
                <table id="table">
                  <thead>
                    <th>Basic</th>
                    <th>Average</th>
                    <th>Good</th>
                    <th>V.Good</th>
                    <th>Advance</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Angular</td>
                      <td></td>
                      <td></td> <td>HTML</td>
                    </tr>
                    <tr>
                      <td>Bootstrap</td>
                      <td></td>
                      <td></td>
                      <td>CSS</td>
                    </tr>
                    <tr>
                      <td>Nodejs</td>
                      <td></td>
                      <td>Javascript</td>
                    </tr>
                    <tr>
                      <td>Reactjs</td>
                    </tr>
                  </tbody>
                </table>
              </li>
              <li>
                <h4>Graphics Design</h4>
              </li>
              <li>
                {" "}
                <h4>Basic UI with Figma</h4>
              </li>
            </ul>
          </li>
        </ul>
        <h5>(References are available on request)</h5>
      </div>


    </div>
  );
};

export default Skills;
