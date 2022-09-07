import './App.css';
import Screen from "./Screen";
import ButtonBox from "./ButtonBox";
import {useState} from 'react';


function App() {

  const btnValues = ["+", "-","*","/" ,"%","C"]
  const [calculatValue, setCalculatValue] = useState(0);
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');


  const calculat=(e)=>{
    if(e.target.value=="+"){
      setCalculatValue(parseInt(inputValue1)+parseInt(inputValue2));
    }else if(e.target.value=="-"){
      setCalculatValue(parseInt(inputValue1)-parseInt(inputValue2));
    }else if(e.target.value=="*"){
      setCalculatValue(parseInt(inputValue1)*parseInt(inputValue2));
    }else if(e.target.value=="/"){
      setCalculatValue(parseInt(inputValue1)/parseInt(inputValue2));
    }if(e.target.value=="%"){
      setCalculatValue(parseInt(inputValue1)%parseInt(inputValue2));
    }else if(e.target.value=="C"){
    setInputValue1('');
    setInputValue2('');
    setCalculatValue(0)
    }
  }

  return (
    <div className="App">
        <header className="App-header">

        <div className="row text-center mb-5" >
        <p>Calculator</p> 
        </div>


        {/* ----------white box--------- */}
     <div className="hero-unit text-center" id='n1'>


        {/* ----------Input--------- */}
        <div className="input-group mt-3">
            <input value={inputValue1} onChange={(e) => setInputValue1(e.target.value)} type="number" className="form-control m-1" placeholder="Number 1" aria-label="Number 1" aria-describedby="button-addon2"/>
            <input value={inputValue2} onChange={(e) => setInputValue2(e.target.value)} type="number" className="form-control m-1" placeholder="Number 2" aria-label="Number 2" aria-describedby="button-addon2"/>
          </div>


        {/* ----------Button--------- */}
        <ButtonBox btnValues={btnValues} calculat={calculat}/>

      


         {/* ----------screan--------- */}
         <Screen value={calculatValue} />



      </div>
      </header>
    </div>
  );
}

export default App;

