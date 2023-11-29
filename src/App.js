import './App.css';
import Homepage from './Components/HomePage/Homepage';
import CourseContextProvider from './Context/CourseContextProvider';

function App() {
  return (<>
    <CourseContextProvider>
      <Homepage />
      </CourseContextProvider>
    </>
  );
}

export default App;
