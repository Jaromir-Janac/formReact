import React, { useEffect, useState } from 'react'
import classes from './LayoutForm.module.css';
import InputForm from '../forms/InputForm';
import CheckForm from '../forms/CheckForm';
import SelectForm from '../forms/SelectForm';
import DateForm from '../forms/DateForm';
import dataPersonCount from '../data/DataPersonCount';
import dataRoomType from '../data/DataRoom';
import dataPersonOther from '../data/DataPersonOther';
import dataBoardOption from '../data/DataBoard';
import dataNightsType from '../data/DataNights';
import { dataBudget, dataEmail, dataName, dataPrice, dataTel } from '../data/DataInput';
import PriceForm from '../forms/PriceForm';
import BudgetForm from '../forms/BudgetForm';
import Button from "./Button"

function LayoutForm(props) {
  const personCount = dataPersonCount;
  const roomType = dataRoomType;
  const personOther = dataPersonOther;
  const boardOption = dataBoardOption;
  const nightsOption = dataNightsType;
  const nameInput = dataName;
  const emailInput = dataEmail;
  const telInput = dataTel;
  const priceInput = dataPrice;
  const budgetInput = dataBudget

  const [addValue, setAddValue] = useState({
    inputName: 0,
    inputEmail: 0,
    ipnutTel: 0,
    inputRoom: 1000,
    inputBoard: 0,
    inputPerson: 1,
    inputOther: 0,
    inputNights: 1,
  });

  const handleChange = (e) => {
    setAddValue(prevState => ({ ...prevState, [e.target.id]: e.target.value }));
    console.log(addValue)
  };



  useEffect(() => { CalculatePrice(addValue) }, [addValue])

  function CalculatePrice(input) {
    let inputRoom = parseInt(input.inputRoom);
    let inputBoard = parseInt(input.inputBoard);
    let inputPerson = parseInt(input.inputPerson);
    let inputOther = parseInt(input.inputOther);
    let inputNights = parseInt(input.inputNights);
    // let radio = CheckForm.checked;
    // inputOther = radio ? inputOther : 0;
    let priceRoom = inputRoom < 1 ? 1 : inputRoom;
    let pricePerson = inputPerson < 1 ? 1 : inputPerson;
    let priceNights = inputNights < 1 ? 1 : inputNights;
    let priceBase = priceRoom * pricePerson * priceNights;
    let priceBoard = priceBase * (inputBoard / 100);
    let priceOther = priceBase * (inputOther / 100);
    let price = priceBase + priceBoard + priceOther;
    price = price === 1 ? 0 : price;
    return price + " Kč"
  }

  return (
    <div className={classes.formLayout} onChange={handleChange}>
      <div className='row'>
        <InputForm data={nameInput} />
        <InputForm data={emailInput} />
        <InputForm data={telInput} />
        <SelectForm data={roomType} labelProp='Room Type:' for='inputRoom' classProp="col-sm-6" name='inputRoom' />
        <SelectForm data={personCount} labelProp='Number of Person:' for='inputPerson' classProp="col-sm-6" name='inputPerson' />
        <div className={classes.formCheck}>
          <div className='row'>
            <CheckForm data={boardOption} type='radio' for='inputBoard' text='Board:' name='boardRadio' />
            <CheckForm data={personOther} type='checkbox' for='inputOther' text='Additional Person:' name='' />
          </div>
        </div>
        <SelectForm data={nightsOption} labelProp='Number of nights:' for='inputNights' classProp="col-sm-4" />
        <DateForm for="inputDateFrom" text="From:" />
        <DateForm for="inputDateTo" text="To:" />
        <PriceForm data={priceInput} input={CalculatePrice(addValue)} />
        <BudgetForm data={budgetInput} />
        <Button />
      </div>
    </div>
  );
}

export default LayoutForm;