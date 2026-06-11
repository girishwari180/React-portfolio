
import React from 'react';

function Education() {
  return (
    <section id="education">
      <h2>EDUCATIONAL QUALIFICATIONS</h2>

      <table>
        <caption><b>MY QUALIFICATIONS</b></caption>

        <thead>
          <tr>
            <th>S.No</th>
            <th>Qualification</th>
            <th>Institution</th>
            <th>Board / University</th>
            <th>Year of Passing</th>
            <th>Percentage / CGPA</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>B.Tech</td>
            <td>K.L.University</td>
            <td>University</td>
            <td>2029</td>
            <td>9 CGPA</td>
          </tr>

          <tr>
            <td>2</td>
            <td>Intermediate</td>
            <td>Narayana Junior College</td>
            <td>State Board</td>
            <td>2025</td>
            <td>96%</td>
          </tr>

          <tr>
            <td>3</td>
            <td>SSC</td>
            <td>Keshava Reddy School</td>
            <td>State Board</td>
            <td>2023</td>
            <td>97%</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default Education;
