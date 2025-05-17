import 'bootstrap/dist/css/bootstrap.min.css';
import SchedulingContainer from './containers/SchedulingContainer';
import { SchedulingProvider } from './contexts/SchedulingContext';

function App() {
  return (
    <SchedulingProvider>
      <SchedulingContainer />
    </SchedulingProvider>
  );
}

export default App;