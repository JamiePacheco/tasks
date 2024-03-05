import React, { useState } from "react";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [questionType, setQuestionType] = useState<QuestionType>(
        "short_answer_question"
    );

    return (
        <div>
            <button
                onClick={() =>
                    setQuestionType(
                        questionType === "short_answer_question"
                            ? "multiple_choice_question"
                            : "short_answer_question"
                    )
                }
            >
                Change Type
            </button>
            <div>
                {questionType === "multiple_choice_question" && (
                    <span> Multiple Choice </span>
                )}
                {questionType === "short_answer_question" && (
                    <span> Short Answer </span>
                )}
            </div>
        </div>
    );
}
