import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS = [
    "Red",
    "Green",
    "Blue",
    "Yellow",
    "Purple",
    "Cyan",
    "Orange",
    "Gray",
];

export function ChangeColor(): React.JSX.Element {
    const [selectedColor, setSelectedColor] = useState<string>(COLORS[0]);

    return (
        <div>
            <h3>Change Color</h3>

            {COLORS.map((color: string) => (
                <Form.Check
                    key={color}
                    type="radio"
                    inline
                    name="colors"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setSelectedColor(event.target.value);
                    }}
                    id={"color-radio-" + color}
                    label={color}
                    value={color}
                    checked={color === selectedColor}
                />
            ))}

            <div>
                You have chosen
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: selectedColor }}
                >
                    {selectedColor}
                </span>
            </div>
        </div>
    );
}
