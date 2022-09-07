
const Button = ({ btnValues , calculat }) => {

    const btnMap= btnValues.map((btn , index) =>(
        <button key= {index} value={btn} className="btn btn-outline-secondary m-1"  type="button" onClick={calculat}>{btn}</button>
      )) 
  
  
  return(
  <>
  {btnMap}
  </>
  );

};

export default Button;

