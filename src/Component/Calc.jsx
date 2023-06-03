import React, { useState } from 'react'
import './App.css'
const Calc = () => {
    const[result,setresult]=useState('')
    const Function=(event)=>{
        setresult(result.concat(event.target.value))
    }
    const clrDisp=()=>{
        setresult("")
    }
    const Calculate=()=>{
        setresult(eval(result).toString())
    }
  return (
    <div>
        <h1>React Calculator</h1>
      <div className="calc">
        <input type="button" placeholder='0' id="answer" value={result}/>
        <input type="button" value="9"  className='button' onClick={Function}/>
        <input type="button" value="8"  className='button' onClick={Function}/>
        <input type="button" value="7"  className='button' onClick={Function}/>
        <input type="button" value="6"  className='button' onClick={Function}/>
        <input type="button" value="5"  className='button' onClick={Function}/>
        <input type="button" value="4"  className='button' onClick={Function}/>
        <input type="button" value="3"  className='button' onClick={Function}/>
        <input type="button" value="2"  className='button' onClick={Function}/>
        <input type="button" value="1"  className='button' onClick={Function}/>
        <input type="button" value="0"  className='button' onClick={Function}/>
        <input type="button" value="."  className='button' onClick={Function}/>
        <input type="button" value="+"  className='button' onClick={Function}/>
        <input type="button" value="-"  className='button' onClick={Function}/>
        <input type="button" value="*"  className='button' onClick={Function}/>
        <input type="button" value="/"  className='button' onClick={Function}/>
        <input type="button" value="%"  className='button' onClick={Function}/>
        <input type="button" value="Clear"  className='button button1' onClick={clrDisp}/>
        <input type="button" value="="  className='button button1' onClick={Calculate}/>

      </div>
    </div>
  )
}

export default Calc
