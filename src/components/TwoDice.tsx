import React, { useState } from "react";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [dieOne, setDieOne] = useState(1);
    const [dieTwo, setDieTwo] = useState(2);

    return (
        <div>
            <div>
                <span data-testid="left-die"> left die {dieOne} </span>
                <span data-testid="right-die"> right die {dieTwo} </span>
            </div>
            <div>
                <button onClick={() => setDieOne(d6())}> Roll Left </button>
                <button onClick={() => setDieTwo(d6())}> Roll Right </button>
            </div>
            <div>
                {dieOne === dieTwo &&
                    (dieOne === 1 ? (
                        <span> You lose loser boy </span>
                    ) : (
                        <span> Yippie, You win </span>
                    ))}
            </div>
        </div>
    );
}
