import React, { useState } from "react";

export function Counter(): JSX.Element {
    const [value, setValue] = useState<number>(0);
    return (
        <span>
            <button onClick={() => setValue(1 + value)}>Add One</button>
            to {value}.
        </span>
    );
}
