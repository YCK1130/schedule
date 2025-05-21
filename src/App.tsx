import "bootstrap/dist/css/bootstrap.min.css";
import React, { Suspense, lazy } from "react";
import { DataSaveProvider, useDataSave } from "./contexts/DataContext";
import { SchedulingProvider } from "./contexts/SchedulingContext";

// 使用動態導入來懶加載容器元件
const DisplayContainer = lazy(() => import("./containers/DisplayContainer"));
const SchedulingContainer = lazy(() => import("./containers/SchedulingContainer"));

// 載入指示元件
const LoadingFallback = () => (
  <div className="loading-container">
    <div className="spinner"></div>
    <h3 className="loading-text">載入中...</h3>
  </div>
);

const UseDataSchedulingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { interviewers, interviewees, setScheduledInterviews, setUnmatchedResults } = useDataSave();
    return (
        <SchedulingProvider interviewees={interviewees} interviewers={interviewers} setScheduledInterviews={setScheduledInterviews} setUnmatchedResults={setUnmatchedResults}>
            {children}
        </SchedulingProvider>
    );
};

function App() {
    return (
        <DataSaveProvider>
            <UseDataSchedulingProvider>
                <Suspense fallback={<LoadingFallback />}>
                    <SchedulingContainer />
                </Suspense>
            </UseDataSchedulingProvider>
            <Suspense fallback={<LoadingFallback />}>
                <DisplayContainer />
            </Suspense>
        </DataSaveProvider>
    );
}

export default App;
