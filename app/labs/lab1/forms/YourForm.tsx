export default function YourForm() {
  return (
    <>
        <h3>Student profile</h3>
        <form id="wd-your-form">
            <label htmlFor="wd-your-first-name">First name:</label>
            <input type="text" placeholder="Adilnur" id="wd-your-first-name" />
            <br />
            <label htmlFor="wd-your-last-name">Last name:</label>
            <input type="text" placeholder="Istekov" id="wd-your-last-name" />
            <br />
            <label htmlFor="wd-your-student-id">Student ID:</label>
            <input type="text" placeholder="003123532" id="wd-your-student-id" />
            <br />
            <h4>Bio:</h4>
            <textarea
                id="wd-your-bio"
                cols={30}
                rows={10}
                defaultValue="My name is Adilnur Istekov. I am a master's student at northeastern University. I am currently studying computer science and interested in pursuing a career in software engineering, and particularly in backend engineering and working with distributed architectures."
            />
            <br />
            <h4>Class Standing:</h4>
            <input type="radio" name="your-class-standing" id="wd-freshman" />
            <label htmlFor="wd-freshman">Freshman</label>
            <br />
            <input type="radio" name="your-class-standing" id="wd-sophomore" />
            <label htmlFor="wd-sophomore">Sophomore</label>
            <br />
            <input type="radio" name="your-class-standing" id="wd-junior" />
            <label htmlFor="wd-junior">Junior</label>
            <br />
            <input type="radio" name="your-class-standing" id="wd-senior" />
            <label htmlFor="wd-senior">Senior</label>
            <br />
            <input type="radio" name="your-class-standing" id="wd-graduate" />
            <label htmlFor="wd-graduate">Graduate</label>
            <br />
            <h4>Academic Load:</h4>
            <input type="radio" name="your-academic-load" id="wd-full-time" />
            <label htmlFor="wd-full-time">Full-time</label>
            <br />
            <input type="radio" name="your-academic-load" id="wd-part-time" />
            <label htmlFor="wd-part-time">Part-time</label>
            
            <h4>Programming languages you know:</h4>
            <input type="checkbox" name="java" id="wd-java" />
            <label htmlFor="wd-java">Java</label>
            <br />
            <input type="checkbox" name="python" id="wd-python" />
            <label htmlFor="wd-java">Python</label>
            <br />
            <input type="checkbox" name="javascript" id="wd-javascript" />
            <label htmlFor="wd-java">Javascript</label>
            <br />
            <input type="checkbox" name="c++" id="wd-c++" />
            <label htmlFor="wd-java">C++</label>
            <h4>Major:</h4>
            <select id="wd-major" defaultValue="COMPUTER SCIENCE">
              <option value="COMPUTER SCIENCE">Computer Science</option>
              <option value="DATA SCIENCE">Data Science</option>
              <option value="COMPUTER ENGINEERING">Computer Engineering</option>
            </select>
            <h4>Topics you want to deepen:</h4>
            <select multiple id="wd-topics" defaultValue={["WEB DEVELOPMENT", "DATABASE MANAGEMENT"]}>
              <option value="WEB DEVELOPMENT">Web Development</option>
              <option value="DATABASE MANAGEMENT">Database Management</option>
              <option value="ALGORITHMS">Algorithms</option>
            </select>
            <h4>Personal info:</h4>
            <label htmlFor="wd-email">School email: </label>
            <input
            type="email"
            placeholder="istekov.a@northeastern.edu"
            id="wd-email"
            />
            <br />
            <label htmlFor="wd-email">Expected graduation year: </label>
            <input
            type="number"
            id="wd-grad-year"
            defaultValue="2028"
            min={2026}
            max={2031}
            />
            <br />
            <label htmlFor="wd-email">Birthday: </label>
            <input
            type="date"
            defaultValue="2001-11-15"
            id="wd-birthday"
            />
            <br />
            <label htmlFor="wd-email">How excited are you about the course? </label>
            <input
            type="range"
            id="wd-excited"
            defaultValue="5"
            min="0"
            max="10"
            />
            <h4>Submission</h4>
            <button id="wd-student-submit" type="submit">Save</button>
            <button id="wd-student-cancel" type="button">Cancel</button>
        </form>
    </>
  );
}