import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AnswerAnotherOne from './components/answerAnotherOne/AnswerAnotherOne';
import AnswerOne from './components/AnswerOne/AnswerOne';
import Header from './components/header/Header';
import Shop from './components/shop/Shop';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
      <AnswerOne></AnswerOne>
      <AnswerAnotherOne></AnswerAnotherOne>
    </div>
  );
}

export default App;
