"use client";
import { useAssignmentStore } from "@/app/(kambaz)/store/assignmentsStore";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string; aid: string }>;
}) {
  const { cid, aid } = useParams();
  const assignments = useAssignmentStore((state) => state.assignments);
  const assignment = assignments.find((a) => a._id === aid);
  const [title, setTitle] = useState(assignment?.title ?? "");
  const [description, setDescription] = useState(assignment?.description ?? "");
  const [points, setPoints] = useState<number | string>(
    assignment?.points ?? 100,
  );
  const [due, setDue] = useState(assignment?.due ?? "");
  const [availableFrom, setAvailableFrom] = useState(
    assignment?.available ?? "",
  );
  const [availableUntil, setAvailableUntil] = useState(
    assignment?.availableUntil ?? "",
  );
  const addAssignment = useAssignmentStore((state) => state.addAssignment);
  const updateAssignment = useAssignmentStore((state) => state.updateAssignment);
  const router = useRouter();
  const listUrl = `/courses/${cid}/assignments`;

  const handleSave = () => {
    const fields = {
      title,
      description,
      points: Number(points),
      due,
      available: availableFrom,
      availableUntil,
    };
    if (assignment) {
      updateAssignment({ ...assignment, ...fields });
    } else {
      addAssignment({
        _id: crypto.randomUUID(),
        course: String(cid),
        ...fields,
      });
    }
    router.push(listUrl);
  };

  const handleCancel = () => router.push(listUrl);

  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <br />
      <input
        className="h-8 w-full"
        id="wd-name"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <p id="wd-assignment-id">Assignment id: {aid}</p>
      <br />
      <textarea
        className="h-50 w-full"
        id="wd-description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <div className="mt-4 grid grid-cols-6 gap-4">
        <div className="col-span-2 text-right">
          <label htmlFor="wd-points">Points</label>
        </div>
        <div className="col-span-4">
          <input
            className="h-8 w-full"
            id="wd-points"
            type="number"
            value={points}
            onChange={(e) => setPoints(e.target.value)}
          />
        </div>
        <div className="col-span-2 text-right">
          <label htmlFor="wd-group">Assignment Group</label>
        </div>
        <div className="col-span-4">
          <select
            className="h-8 w-full"
            id="wd-group"
            defaultValue="ASSIGNMENTS"
          >
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
          <select
            className="w-full h-8"
            id="wd-display-grade-as"
            defaultValue="PERCENTAGE"
          >
            <option value="PERCENTAGE">Percentage</option>
          </select>
        </div>
        <div className="col-span-2 text-right">
          <label htmlFor="wd-submission-type">Submission Type</label>
        </div>
        <div className="col-span-4 h-50 border rounded p-4">
          <select
            className="w-full h-8"
            id="wd-submission-type"
            defaultValue="ONLINE"
          >
            <option value="ONLINE">Online</option>
          </select>
          <label>
            <b>Online Entry Options</b>{" "}
          </label>
          <br />
          <input type="checkbox" name="text-entry" id="wd-text-entry" />
          <label htmlFor="wd-text-entry">Text Entry</label>
          <br />
          <input type="checkbox" name="website-url" id="wd-website-url" />
          <label htmlFor="wd-website-url">Website URL</label>
          <br />
          <input
            type="checkbox"
            name="media-recordings"
            id="wd-media-recordings"
          />
          <label htmlFor="wd-media-recordings">Media Recordings</label>
          <br />
          <input
            type="checkbox"
            name="student-annotation"
            id="wd-student-annotation"
          />
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
          <label htmlFor="wd-assign-to">
            <b>Assign to</b>
          </label>
          <br />
          <input id="wd-assign-to" defaultValue="Everyone" />
          <br />
          <label htmlFor="wd-due-date">
            <b>Due</b>
          </label>
          <br />
          <input
            type="date"
            id="wd-due-date"
            value={due}
            onChange={(e) => setDue(e.target.value)}
          />
          <br />
          <label htmlFor="wd-available-from">
            <b>Available from </b>
          </label>{" "}
          <label className="m-1" htmlFor="wd-available-until">
            <b>Until</b>
          </label>
          <br />
          <input
            type="date"
            id="wd-available-from"
            value={availableFrom}
            onChange={(e) => setAvailableFrom(e.target.value)}
          />{" "}
          <input
            type="date"
            id="wd-available-until"
            value={availableUntil}
            onChange={(e) => setAvailableUntil(e.target.value)}
          />
        </div>
      </div>
      <label htmlFor="wd-ai-editor-notes">Sample notes</label>
      <br />
      <textarea className="h-50 w-full" id="wd-ai-editor-notes" />
      <br />
      <br />
      <div>
        <button type="button" id="wd-save-assignment" onClick={handleSave}>
          Save
        </button>{" "}
        <button type="button" id="wd-cancel-assignment" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
}
