import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = "🎂" | "🎄" | "🎃" | "🍀" | "🎆";

const HolidaysAlpha: Record<Holiday, Holiday> = {
    "🎂": "🎄",
    "🎄": "🎆",
    "🎆": "🎃",
    "🎃": "🍀",
    "🍀": "🎂",
};
const HolidaysDate: Record<Holiday, Holiday> = {
    "🍀": "🎂",
    "🎂": "🎆",
    "🎆": "🎃",
    "🎃": "🎄",
    "🎄": "🍀",
};

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("🎂");

    return (
        <div>
            <div>Holiday: {holiday}</div>
            <Button
                onClick={() => {
                    setHoliday(HolidaysAlpha[holiday]);
                }}
            >
                Advance by Alphabet
            </Button>
            <Button
                onClick={() => {
                    setHoliday(HolidaysDate[holiday]);
                }}
            >
                Advance by Year
            </Button>
        </div>
    );
}
