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
    const radioButtons = options.map((option: string) => {
        return (
            <Form.Check
                inline
                type="radio"
                key={option}
                name={option}
                onChange={(e) => setUserAnswer(e.target.value)}
                label={option}
                value={option}
                checked={userAnswer === option}
            ></Form.Check>
        );
    });
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <div>{radioButtons}</div>
            <div>
                <span>{expectedAnswer === userAnswer ? "✔️" : "❌"}</span>
            </div>
        </div>
    );
}
