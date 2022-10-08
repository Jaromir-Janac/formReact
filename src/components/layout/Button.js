import { useState } from 'react';
import { dataBudget } from '../data/DataInput';
import classes from './Button.module.css';


function Button(props) {
  const [budgetCheck, setBudgetCheck] = useState(0)
  const handleClick = (e) => {
    setBudgetCheck(dataBudget.value);
    console.log(budgetCheck);
  };

  return (
    <div className='col-sm-4'>
      <div className={classes.buttonStyle}>
        <label htmlFor='budgetCompare' className='col-form-label'>
          <div className="btn btn-dark" onClick={handleClick}>Will it be enough?</div>
        </label>
      </div>
      <input readOnly className="form-control" type="text" id='budgetCompare'></input>
    </div>
  )
}

export default Button;