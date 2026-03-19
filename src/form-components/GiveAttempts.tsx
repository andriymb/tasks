import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<string>("");

    return (
        <div>
            <h3>Attempts: {attempts}</h3>
            <Form.Group controlId="giveAttemptsInput">
                <Form.Label>Requested # of Attempts</Form.Label>
                <Form.Control
                    type="number"
                    value={requestedAttempts}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setRequestedAttempts(event.target.value);
                    }}
                />
            </Form.Group>
            <Button
                onClick={() => {
                    setAttempts(attempts - 1);
                }}
                disabled={attempts === 0}
            >
                Use
            </Button>
            <Button
                onClick={() => {
                    setAttempts(attempts + (parseInt(requestedAttempts) || 0));
                }}
            >
                Gain
            </Button>
        </div>
    );
}
