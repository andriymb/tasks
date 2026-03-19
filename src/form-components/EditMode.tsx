import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [userName, setUserName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    return (
        <div>
            <h3>Edit Mode</h3>

            <Form.Check
                type="switch"
                id="edit-mode-switch"
                label="Edit Mode"
                checked={editMode}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setEditMode(event.target.checked);
                }}
            />
            {editMode && (
                <Form.Group controlId="userNameInput">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control
                        value={userName}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>,
                        ) => {
                            setUserName(event.target.value);
                        }}
                    />
                </Form.Group>
            )}
            {editMode && (
                <Form.Check
                    type="checkbox"
                    id="is-student-check"
                    label="Is Student"
                    checked={isStudent}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setIsStudent(event.target.checked);
                    }}
                />
            )}
            {!editMode ?
                isStudent ?
                    `${userName} is a student`
                :   `${userName} is not a student`
            :   ""}
        </div>
    );
}
