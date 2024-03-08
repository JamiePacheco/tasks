import { Console } from "console";
import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [currentAnswer, setCurrentAnswer] = useState<string>("");

    function updateCurrentAnswer(e: React.ChangeEvent<HTMLInputElement>) {
        setCurrentAnswer(e.target.value);
        console.log(currentAnswer);
    }

    return (
        <div>
            <div>
                <Form.Group controlId="userAnswer">
                    <Form.Label>Answer</Form.Label>
                    <Form.Control
                        value={currentAnswer}
                        onChange={updateCurrentAnswer}
                    ></Form.Control>
                </Form.Group>
            </div>
            <div>
                {currentAnswer === expectedAnswer ? (
                    <span>✔️</span>
                ) : (
                    <span>❌</span>
                )}
            </div>
        </div>
    );
}
