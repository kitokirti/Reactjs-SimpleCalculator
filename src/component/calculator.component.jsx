import React, { useState } from 'react'

import * as math from 'mathjs';

import Button from './button/button.component';
import Input from './input/input.component';
import '../App.css';



const Calculator = () => {
    const [text, setText] = useState('');
    const [result, setResult] = useState('');

    const addText = (val)=>{
        setText((text)=>[...text, val, " "]);
    }
    const calculateResult = ()=>{
        const input = text.join(""); //Remove commas

        setResult(math.evaluate(input));
    }

    const clearInput = ()=>{
        setText('');
        setResult('');
    }
    return (
        <div>

            <Input text={text} result={result}/>

            <div className='row'>
                <Button symbol="7" handleClick={addText}/>
                <Button symbol="8" handleClick={addText}/>
                <Button symbol="9" handleClick={addText}/>
                <Button symbol="/" color="#f2a33c" handleClick={addText}/>
            </div>
            <div className='row'>
                <Button symbol="4" handleClick={addText}/>
                <Button symbol="5" handleClick={addText}/>
                <Button symbol="6" handleClick={addText}/>
                <Button symbol="*" color="#f2a33c" handleClick={addText}/>
            </div>
            <div className='row'>
                <Button symbol="1" handleClick={addText}/>
                <Button symbol="2" handleClick={addText}/>
                <Button symbol="3" handleClick={addText}/>
                <Button symbol="+" color="#f2a33c" handleClick={addText}/>
            </div>
            <div className='row'>
                <Button symbol="0" handleClick={addText}/>
                <Button symbol="." handleClick={addText}/>
                <Button symbol="=" handleClick={calculateResult}/>
                <Button symbol="-" color="#f2a33c" handleClick={addText}/>
            </div>
            <Button symbol="Clear" handleClick={clearInput}/>
        </div>
    )

}

export default Calculator;
