
import './App.css';
import HeadSection from './Components/header/HeadSection';
import Objective from './Components/body/Objective';
import Summary from './Components/body/Summary';
import Qualification from './Components/body/Qualification';
import Skills from './Components/body/Skills';

function App() {
  return (
    <div className="App">
      {/* <h1>Side Hustle Internship</h1> */}
      <HeadSection />
      <Objective />
      <Summary />
      <Qualification />
      <Skills />
    </div>
  );
}

export default App;
