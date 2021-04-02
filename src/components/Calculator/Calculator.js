import React, { useState } from 'react';
import './Calculator.css';

const Footer = () => {
    const [display, setDisplay] = useState(0);

    return (
        <div className='Footer'>
            <div className='Calculator'>
                <div className='Display'>
                    <h1>{display}</h1>
                </div>
                <div className='Char'>
                    <div className='row-1'>
                        <button onClick={() => {
                            setDisplay(9)
                        }}>9</button>
                        <button onClick={() => {
                            setDisplay(8)
                        }}>8</button>
                        <button onClick={() => {
                            setDisplay(7)
                        }}>7</button>
                        <button onClick={() => {
                            setDisplay(0)
                        }}>C</button>
                    </div>
                    <div className='row-2'>
                        <button onClick={() => {
                            setDisplay(6)
                        }}>6</button>
                        <button onClick={() => {
                            setDisplay(5)
                        }}>5</button>
                        <button onClick={() => {
                            setDisplay(4)
                        }}>4</button>
                        <button onClick={() => {
                            setDisplay('*')
                        }}>×</button>
                    </div>
                    <div className='row-3'>
                        <button onClick={() => {
                            setDisplay(3)
                        }}>3</button>
                        <button onClick={() => {
                            setDisplay(2)
                        }}>2</button>
                        <button onClick={() => {
                            setDisplay(1)
                        }}>1</button>
                        <button onClick={() => {
                            setDisplay('/')
                        }}>÷</button>
                    </div>
                    <div className='row-4'>
                        <button onClick={() => {
                            setDisplay(0)
                        }}>0</button>
                        <button onClick={() => {
                            setDisplay('+')
                        }}>+</button>
                        <button onClick={() => {
                            setDisplay('-')
                        }}>-</button>
                        <button onClick={() => {
                            setDisplay('=')
                        }}>=</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;