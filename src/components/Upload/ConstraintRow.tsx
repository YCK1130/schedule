import type { ChangeEvent } from "react";
import { Button, Form } from "react-bootstrap";
import "../../styles/restriction.css";
import type { GroupRestriction, GroupType } from "../../types";

interface ConstraintRowProps {
    index: number;
    groupId: GroupType;
    restriction: GroupRestriction;
    positionsList: string[];
    onPositionChange: (e: ChangeEvent<HTMLSelectElement>) => void;
    onMinChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onMaxChange: (e: ChangeEvent<HTMLInputElement>) => void;
    removeRow: () => void;
}

const ConstraintRow: React.FC<ConstraintRowProps> = ({
    index,
    groupId,
    restriction,
    positionsList,
    onPositionChange,
    onMinChange,
    onMaxChange,
    removeRow,
}) => (
    <div key={`${groupId}-constraint${index}`} className="restriction-box">
        <div className="restriction-row">
            <Form.Select value={restriction.targetPosition || "所有"} className="restriction-column" onChange={onPositionChange}>
                {positionsList.map((position) => (
                    <option key={`${groupId}-${position}-constraint${index}`} value={position}>
                        {position}
                    </option>
                ))}
            </Form.Select>
            <Form.Control
                type="number"
                className="restriction-column"
                min="1"
                value={restriction.minCount}
                onChange={onMinChange}
                placeholder="最小數量"
            />
            <>~</>
            <Form.Control
                type="number"
                className="restriction-column"
                min="1"
                value={restriction.maxCount}
                onChange={onMaxChange}
                placeholder="最大數量"
            />

            <Button variant="outline-danger" size="sm" className="remove-btn" onClick={removeRow}>
                ✕
            </Button>
        </div>
    </div>
);
export default ConstraintRow;
