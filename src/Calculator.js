import { useState } from 'react';
import './Calculator.css';

function Calculator() {


    let [ result , setResult ] =  useState('')

    let [hasDot , setHasDot] = useState(false)

    let opreators = [ '+' , '*', '/' , '-']
 

    const checkInput  = (Text) =>{
        if(Text == '÷') return '/'
        if(Text == '×') return '*'
        return Text

    }


    const clickHandler = (e) => {

        let input = checkInput(e.target.innerText)
        if(input == '.') {
            if (hasDot == true) return
            else setHasDot(true)
        }
            if (opreators.includes(input)) {
                setHasDot(false)
            }
        
            setResult(result + input)     

    }


   
    const clearBtn = () =>{
        setResult('')
        setHasDot(false)
    }

    
    const backSoaceBtn = () =>{
        if(result.endsWith('.'))
            setHasDot(false)
        setResult(result.slice(0 ,-1))
        
        

    }


    const equalBtn = () =>{
        setResult(String(eval(result)))
        setHasDot(false)
    }
   

    return(
        <div className="container" >
            <div className="screen">{result}</div>
            <div className="buttons">
                <button onClick={clearBtn} className="color twocol" >Clear</button>
                <button  onClick={backSoaceBtn} className="color" >c</button>
                <button  onClick={clickHandler}  className="color">÷</button>
                <button onClick={clickHandler} >7</button>
                <button onClick={clickHandler} >8</button>
                <button onClick={clickHandler} >9</button>
                <button onClick={clickHandler}  className="color">×</button>
                <button onClick={clickHandler} >4</button>
                <button onClick={clickHandler} >5</button>
                <button onClick={clickHandler} >6</button>
                <button onClick={clickHandler}  className="color">-</button>
                <button onClick={clickHandler} >1</button>
                <button onClick={clickHandler} >2</button>
                <button onClick={clickHandler} >3</button>
                <button  onClick={clickHandler} className="color">+</button>
                <button onClick={clickHandler} >0</button>
                <button onClick={clickHandler}  className="color">.</button>
                <button onClick={equalBtn}  className="color twocol"  >=</button>
            </div>
        </div>
    )
    
}



export default Calculator