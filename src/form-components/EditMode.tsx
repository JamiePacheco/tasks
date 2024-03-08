import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [userName, setUserName] = useState<string>("Your Name");
    const [student, setStudent] = useState<boolean>(true);

    function updateMode(e: React.ChangeEvent<HTMLInputElement>) {
        setEditMode(e.target.checked);
    }

    function updateUserName(e: React.ChangeEvent<HTMLInputElement>) {
        setUserName(e.target.value);
    }

    function updateStudent(e: React.ChangeEvent<HTMLInputElement>) {
        setStudent(e.target.checked);
    }

    return (
        <div>
            <h1>{editMode ? "Edit Mode" : "View Mode"}</h1>
            <div>
                <Form.Check
                    type="switch"
                    id="is-edit-mode"
                    label="edit"
                    checked={editMode}
                    onChange={updateMode}
                ></Form.Check>
            </div>
            <div>
                {editMode && (
                    <div>
                        <Form.Group>
                            <Form.Label>Username:</Form.Label>
                            <Form.Control
                                value={userName}
                                onChange={updateUserName}
                            ></Form.Control>
                        </Form.Group>
                        <Form.Check
                            type="checkbox"
                            id="is-student"
                            label="student"
                            checked={student}
                            onChange={updateStudent}
                        ></Form.Check>
                    </div>
                )}
                {!editMode && (
                    <div>
                        <span>
                            {userName} is{" "}
                            {student ? "a student" : "not a student"}
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
}
