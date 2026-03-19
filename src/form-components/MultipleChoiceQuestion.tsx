import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [userChoice, setUserChoice] = useState<string>(options[0]);

    return (
        <div>
            <h3>
                Multiple Choice Question:{" "}
                {userChoice === expectedAnswer ? "✔️" : "❌"}
            </h3>
            <Form.Group controlId="multipleChoiceDropdown">
                <Form.Label>Choose an option</Form.Label>
                <Form.Select
                    value={userChoice}
                    onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                        setUserChoice(event.target.value);
                    }}
                >
                    {options.map((option: string) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
                Current Choice: {userChoice}
            </Form.Group>
        </div>
    );
}
