import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Articles from './Articles';
import Tips from './Tips';


function App() {
  return (
    <div className="App">
      <Header /> 
      <Articles />
      <Tips />
      <Tips />
      
      <Header />
      <hr />
      
    </div>
  );
}

export default App;
