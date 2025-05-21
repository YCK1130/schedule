import "bootstrap/dist/css/bootstrap.min.css";
import DisplayContainer from "./containers/DisplayContainer";
import SchedulingContainer from "./containers/SchedulingContainer";
import { DataSaveProvider, useDataSave } from "./contexts/DataContext";
import { SchedulingProvider } from "./contexts/SchedulingContext";

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
                <SchedulingContainer />
            </UseDataSchedulingProvider>
            <DisplayContainer />
        </DataSaveProvider>
    );
}

export default App;
