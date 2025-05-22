import type { ChangeEvent } from "react";
import React, { useCallback, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import "../../styles/restriction.css";
import type { GroupRestriction, GroupType } from "../../types";

interface ConstraintRowProps {
    index: number;
    groupId: GroupType;
    restriction: GroupRestriction;
    positionsList: string[];
    onPositionChange: (e: ChangeEvent<HTMLSelectElement>) => void;
    onMinChange: (value: number | null) => void;
    onMaxChange: (value: number | null) => void;
    removeRow: () => void;
    disableDelelete?: boolean;
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
    disableDelelete,
}) => {
    // 本地狀態用於存儲輸入值，支援暫時為空的狀態
    const [minValue, setMinValue] = useState<string>(restriction.minCount?.toString() || "");
    const [maxValue, setMaxValue] = useState<string>(restriction.maxCount?.toString() || "");
    
    // 用於 debounce 的定時器 ID
    const [minDebounceTimer, setMinDebounceTimer] = useState<NodeJS.Timeout | null>(null);
    const [maxDebounceTimer, setMaxDebounceTimer] = useState<NodeJS.Timeout | null>(null);

    // 當 restriction 從外部改變時，更新本地狀態
    useEffect(() => {
        setMinValue(restriction.minCount?.toString() || "");
        setMaxValue(restriction.maxCount?.toString() || "");
    }, [restriction.minCount, restriction.maxCount]);

    // 處理最小值變更，並支援臨時空值
    const handleMinChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setMinValue(newValue);
        
        // 清除先前的定時器
        if (minDebounceTimer) clearTimeout(minDebounceTimer);
        
        // 設定新的定時器
        const timer = setTimeout(() => {
            if (newValue === "") {
                // 允許暫時為空
                onMinChange(null);
            } else {
                const numValue = parseInt(newValue, 10);
                // 檢查最小值不超過最大值
                if (!isNaN(numValue)) {
                    const maxNum = maxValue === "" ? Infinity : parseInt(maxValue, 10);
                    if (numValue > maxNum && !isNaN(maxNum)) {
                        // 如果最小值超過最大值，將最小值設為最大值
                        setMinValue(maxValue);
                        onMinChange(parseInt(maxValue, 10));
                    } else if (numValue < 1) {
                        setMinValue("1");
                        onMinChange(1);
                    } else {
                        onMinChange(numValue);
                    }
                }
            }
        }, 500); // 500ms 的 debounce 延遲
        
        setMinDebounceTimer(timer);
    }, [minDebounceTimer, maxValue, onMinChange]);

    // 處理最大值變更，並支援臨時空值
    const handleMaxChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setMaxValue(newValue);
        
        // 清除先前的定時器
        if (maxDebounceTimer) clearTimeout(maxDebounceTimer);
        
        // 設定新的定時器
        const timer = setTimeout(() => {
            if (newValue === "") {
                // 允許暫時為空
                onMaxChange(null);
            } else {
                const numValue = parseInt(newValue, 10);
                // 檢查最大值不小於最小值
                if (!isNaN(numValue)) {
                    const minNum = minValue === "" ? 0 : parseInt(minValue, 10);
                    if (numValue < minNum && !isNaN(minNum)) {
                        // 如果最大值小於最小值，將最大值設為最小值
                        setMaxValue(minValue);
                        onMaxChange(parseInt(minValue, 10));
                    } else {
                        onMaxChange(numValue);
                    }
                }
            }
        }, 500); // 500ms 的 debounce 延遲
        
        setMaxDebounceTimer(timer);
    }, [maxDebounceTimer, minValue, onMaxChange]);

    // 組件卸載時清除定時器
    useEffect(() => {
        return () => {
            if (minDebounceTimer) clearTimeout(minDebounceTimer);
            if (maxDebounceTimer) clearTimeout(maxDebounceTimer);
        };
    }, [minDebounceTimer, maxDebounceTimer]);

    return (
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
                    value={minValue}
                    onChange={handleMinChange}
                    placeholder="最小數量"
                />
                <>~</>
                <Form.Control
                    type="number"
                    className="restriction-column"
                    min={minValue || "1"}
                    value={maxValue}
                    onChange={handleMaxChange}
                    placeholder="最大數量"
                />

                <Button variant="outline-danger" size="sm" className="remove-btn" onClick={removeRow} disabled={disableDelelete}>
                    ✕
                </Button>
            </div>
        </div>
    );
}

export default ConstraintRow;
