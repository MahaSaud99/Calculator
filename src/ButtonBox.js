import Button from "./Button";
import useState from 'react';


const ButtonBox = ({ btnValues , calculat }) => {
  return(
   <div className="row p-3">
    <div className="col">
    <Button  btnValues={btnValues} calculat={calculat}/>
    </div>
   </div>

  );
};

export default ButtonBox;