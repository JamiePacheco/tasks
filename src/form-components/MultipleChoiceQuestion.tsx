import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [userAnswer, setUserAnswer] = useState(options[0]);
    const mappedOptions = options.map((option: string) => {
        return (
            <option key={option} value={option}>
                {option}
            </option>
        );
    });
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <div>
                <Form.Group controlId="choices">
                    <Form.Select
                        value={userAnswer}
                        onChange={(e) => setUserAnswer(e.target.value)}
                    >
                        {mappedOptions}
                    </Form.Select>
                </Form.Group>
            </div>
            <div>
                <span>{expectedAnswer === userAnswer ? "✔️" : "❌"}</span>
            </div>
        </div>
    );
}
