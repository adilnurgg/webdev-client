import { useState } from "react";
import { FaTrash } from "react-icons/fa6";
import { useAssignmentStore } from "../../../store/assignmentsStore";

export default function AssignmentDeletion({assignmentId}:{assignmentId: string}) {
  const [show, setShow] = useState(false);
  const deleteAssignment = useAssignmentStore((state) => state.deleteAssignment);
  return (
    <>
      <button
        type="button"
        className="ml-auto h-8 shrink-0 self-center"
        onClick={() => setShow(true)}
      >
        <FaTrash  />
      </button>
      {show && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
          id="wd-add-assignment-dialog"
        >
          <div className="w-full max-w-md rounded-lg bg-white shadow-lg">
            <div className="flex items-center justify-between border-b border-neutral-200 px-4 py-3">
              <h3 className="m-0 text-lg font-semibold">Delete Assignment</h3>
              <button
                type="button"
                onClick={() => setShow(false)}
                className="text-2xl leading-none text-neutral-500"
                aria-label="Close"
              >
                ×
              </button>
            </div>
            <p className="m-4">Are you sure you want to delete this assignment?</p>
            <div className="flex justify-end gap-2 border-t border-neutral-200 px-4 py-3">
                <button
                type="button"
                onClick={() => {
                  deleteAssignment(assignmentId);
                  setShow(false);
                }}
                className="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm"
                id="wd-add-assignment-submit"
              >
                Yes
              </button>
              <button
                type="button"
                onClick={() => setShow(false)}
                className="rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
                id="wd-add-assignment-cancel"
              >
                No
              </button>
              
            </div>
          </div>
        </div>
      )}
    </>
  );
}