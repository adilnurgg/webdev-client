import Link from "next/link";

export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <br />
      <input className="h-8 w-full" id="wd-name" defaultValue="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea className ="h-50 w-full"id="wd-description" defaultValue="The assignment is available online Submit a link to the landing page of" />
      <br />
      <div className="mt-4 grid grid-cols-6 gap-4">
        <div className="col-span-2 text-right">
          <label htmlFor="wd-points">Points</label>
        </div>
        <div className="col-span-4">
          <input className="h-8 w-full" id="wd-points" defaultValue={100} />
        </div>
        <div className="col-span-2 text-right">
          <label htmlFor="wd-group">Assignment Group</label>
        </div>
        <div className="col-span-4">
          <select className="h-8 w-full" id="wd-group" defaultValue="ASSIGNMENTS">
                    <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                    <option value="QUIZZES">QUIZZES</option>
                    <option value="EXAMS">EXAMS</option>
                    <option value="PROJECT">PROJECT</option>
                </select>
        </div>
        <div className="col-span-2 text-right">
          <label htmlFor="wd-display-grade-as">Display Grade as</label>
        </div>
        <div className="col-span-4">
          <select className="w-full h-8" id="wd-display-grade-as" defaultValue="PERCENTAGE">
              <option value="PERCENTAGE">Percentage</option>
          </select>
        </div>
        <div className="col-span-2 text-right">
          <label htmlFor="wd-submission-type">Submission Type</label>
        </div>
        <div className="col-span-4 h-50 border rounded p-4">
          <select className="w-full h-8" id="wd-submission-type" defaultValue="ONLINE">
            <option value="ONLINE">Online</option>
          </select>
          <label><b>Online Entry Options</b>  </label>
                <br />
                <input type="checkbox" name="text-entry" id="wd-text-entry" />
                <label htmlFor="wd-text-entry">Text Entry</label>
                <br />
                <input type="checkbox" name="website-url" id="wd-website-url" />
                <label htmlFor="wd-website-url">Website URL</label>
                <br />
                <input type="checkbox" name="media-recordings" id="wd-media-recordings" />
                <label htmlFor="wd-media-recordings">Media Recordings</label>
                <br />
                <input type="checkbox" name="student-annotation" id="wd-student-annotation" />
                <label htmlFor="wd-student-annotation">Student Annotation</label>
                <br />
                <input type="checkbox" name="file-uploads" id="wd-file-uploads" />
                <label htmlFor="wd-file-uploads">File Uploads</label>
                <br />
        </div>
        <div className="col-span-2 text-right">
          <label htmlFor="wd-submission-type">Assign</label>
        </div>
        <div className="col-span-4 h-50 p-4 border rounded">
          <label htmlFor="wd-assign-to"><b>Assign to</b></label>
          <br />
          <input id="wd-assign-to" defaultValue="Everyone" />
          <br />
          <label htmlFor="wd-due-date"><b>Due</b></label>
          <br />
          <input type="date" id="wd-due-date" />
          <br />
          <label htmlFor="wd-available-from"><b>Available from </b></label> <label className="m-1" htmlFor="wd-available-until"><b>Until</b></label>
          <br />
          <input type="date" id="wd-available-from"></input> <input type="date" id="wd-available-until"></input>       
        </div>
      </div>
      <label htmlFor="wd-ai-editor-notes">Sample notes</label>
      <br />
      <textarea className="h-50 w-full" id="wd-ai-editor-notes" />
      <br />
      <br />
      <div >
        <Link href={`/courses/${cid}/assignments`}><button>Save</button></Link> <Link href={`/courses/${cid}/assignments`}><button>Cancel</button></Link>
      </div>
      
    </div>
  );
}
