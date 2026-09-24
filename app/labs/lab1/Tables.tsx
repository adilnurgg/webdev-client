export default function Tables() {
  return (
    <div id="wd-tables">
      <h4>Table Tag</h4>
      <table border={1} width="100%">
        <thead>
          <tr>
            <th>Quiz</th>
            <th align="center">Topic</th>
            <th align="center">Date</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Q1</td>
            <td align="center">HTML</td>
            <td align="center">2/3/21</td>
            <td align="right">85</td>
          </tr>
          <tr>
            <td>Q2</td>
            <td align="center">CSS</td>
            <td align="center">2/10/21</td>
            <td align="right">90</td>
          </tr>
          <tr>
            <td>Q3</td>
            <td align="center">JavaScript</td>
            <td align="center">2/17/21</td>
            <td align="right">95</td>
          </tr>
          <tr>
            <td>Q4</td>
            <td align="center">Node.js</td>
            <td align="center">2/24/21</td>
            <td align="right">88</td>
          </tr>
          <tr>
            <td>Q5</td>
            <td align="center">Express</td>
            <td align="center">3/3/21</td>
            <td align="right">92</td>
          </tr>
          <tr>
            <td>Q6</td>
            <td align="center">MongoDB</td>
            <td align="center">3/10/21</td>
            <td align="right">80</td>
          </tr>
          <tr>
            <td>Q7</td>
            <td align="center">React</td>
            <td align="center">3/17/21</td>
            <td align="right">97</td>
          </tr>
          <tr>
            <td>Q8</td>
            <td align="center">Redux</td>
            <td align="center">3/24/21</td>
            <td align="right">91</td>
          </tr>
          <tr>
            <td>Q9</td>
            <td align="center">REST APIs</td>
            <td align="center">3/31/21</td>
            <td align="right">86</td>
          </tr>
          <tr>
            <td>Q10</td>
            <td align="center">Authentication</td>
            <td align="center">4/7/21</td>
            <td align="right">96</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3}>Average</td>
            <td align="right">90</td>
          </tr>
        </tfoot>
      </table>
      <h4>My Courses:</h4>
      <table id="wd-your-table" border={1} width="100%">
        <thead>
            <tr>
                <th>Course Name</th>
                <th>Course Number</th>
                <th>Instructor</th>
                <th>Credits</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Web Development</td>
                <td align="center">CS5610</td>
                <td align="center">Jose Annunziato</td>
                <td align="right">4</td>
            </tr>
            <tr>
                <td>Programming Design Paradigms</td>
                <td align="center">CS5010</td>
                <td align="center">Joydeep Mitra</td>
                <td align="right">4</td>
            </tr>
            <tr>
                <td>Professional Development Co-op</td>
                <td align="center">EXED6000</td>
                <td align="center">Erica Hatzievgenakis</td>
                <td align="right">0</td>
            </tr>
        </tbody>

      </table>
    </div>
  );
}