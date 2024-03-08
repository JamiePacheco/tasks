import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [attemptsRequested, setAttemptsRequested] = useState<number>(0);

    function changeAttempts(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.value !== "") {
            setAttemptsRequested(Number(e.target.value));
        }
    }

    return (
        <div>
            <h3>Attempts Left: {attemptsLeft}</h3>
            <div>
                <Form.Group controlId="requestAttemptsAmount">
                    <Form.Label>Request Amount:</Form.Label>
                    <Form.Control
                        type="number"
                        value={attemptsRequested}
                        onChange={changeAttempts}
                    ></Form.Control>
                </Form.Group>
            </div>
            <div>
                <Button
                    disabled={attemptsLeft < 1}
                    onClick={() => setAttemptsLeft(attemptsLeft - 1)}
                >
                    use
                </Button>
                <Button
                    onClick={() =>
                        setAttemptsLeft(attemptsLeft + attemptsRequested)
                    }
                >
                    Gain
                </Button>
            </div>
        </div>
    );
}
