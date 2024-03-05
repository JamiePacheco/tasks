import React, { useState } from "react";

export function StartAttempt(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(4);
    const [inProgress, setInProgress] = useState<boolean>(false);

    return (
        <div>
            <span> Attempts Left: {attemptsLeft} </span>
            <div>
                <button
                    disabled={inProgress || attemptsLeft === 0}
                    onClick={() => {
                        setAttemptsLeft(attemptsLeft - 1);
                        setInProgress(true);
                    }}
                >
                    Start Quiz
                </button>
            </div>
            <div>
                <button
                    disabled={!inProgress}
                    onClick={() => {
                        setInProgress(false);
                    }}
                >
                    Stop Quiz
                </button>
            </div>
            <div>
                <button
                    disabled={inProgress}
                    onClick={() => {
                        setAttemptsLeft(attemptsLeft + 1);
                    }}
                >
                    Mulligan
                </button>
            </div>
        </div>
    );
}
