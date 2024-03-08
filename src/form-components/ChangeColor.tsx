import React, { useState } from "react";
import { Form } from "react-bootstrap";

const colors = [
    "Black",
    "Brown",
    "DarkGreen",
    "Beige",
    "Blue",
    "DarkGrey",
    "LightGrey",
    "White"
];

export function ChangeColor(): JSX.Element {
    const [currentColor, setCurrentColor] = useState<string>(colors[0]);

    function updateColor(e: React.ChangeEvent<HTMLInputElement>) {
        setCurrentColor(e.target.value);
    }

    const radioButtons = colors.map((color: string) => {
        return (
            <Form.Check
                inline
                type="radio"
                key={color}
                name={color}
                onChange={updateColor}
                label={color}
                value={color}
                checked={currentColor === color}
                style={{ background: color }}
            ></Form.Check>
        );
    });

    console.log(radioButtons);
    return (
        <div>
            <h3>Change Color</h3>
            <div>{radioButtons}</div>
            <div>
                <>
                    you have chosen{" "}
                    <span
                        data-testid="colored-box"
                        style={{ background: currentColor }}
                    >
                        {currentColor}
                    </span>
                    {"."}
                </>
            </div>
        </div>
    );
}
