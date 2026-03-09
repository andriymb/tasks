import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [textVisible, setTextVisible] = useState<boolean>(false);

    return (
        <div>
            <Button
                onClick={() => {
                    setTextVisible(!textVisible);
                }}
            >
                {textVisible ? "42" : "Reveal Answer"}
            </Button>
        </div>
    );
}
