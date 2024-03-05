import React, { useState } from "react";

type Holiday =
    | "Halloween"
    | "Christmas"
    | "Jamie's Birthday"
    | "Ground-Hog day"
    | "Free Donut Day";

const dateMapping: Record<Holiday, Holiday> = {
    "Ground-Hog day": "Jamie's Birthday",
    "Jamie's Birthday": "Free Donut Day",
    "Free Donut Day": "Halloween",
    Halloween: "Christmas",
    Christmas: "Ground-Hog day"
};

const alphaMapping: Record<Holiday, Holiday> = {
    Christmas: "Free Donut Day",
    "Free Donut Day": "Ground-Hog day",
    "Ground-Hog day": "Halloween",
    Halloween: "Jamie's Birthday",
    "Jamie's Birthday": "Christmas"
};

const emojiMapping: Record<Holiday, string> = {
    "Ground-Hog day": "🐿",
    Christmas: "🎅",
    "Free Donut Day": "🍩",
    "Jamie's Birthday": "🤠",
    Halloween: "👻"
};

export function CycleHoliday(): JSX.Element {
    const [currentHoliday, setCurrentHoliday] =
        useState<Holiday>("Ground-Hog day");

    return (
        <div>
            <span> Holiday: {emojiMapping[currentHoliday]} </span>
            <div>
                <button
                    onClick={() =>
                        setCurrentHoliday(alphaMapping[currentHoliday])
                    }
                >
                    Advance by Alphabet
                </button>
                <button
                    onClick={() =>
                        setCurrentHoliday(dateMapping[currentHoliday])
                    }
                >
                    Advance by Year
                </button>
            </div>
        </div>
    );
}
