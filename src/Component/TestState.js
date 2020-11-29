import React, {useState} from 'react'



let Num = () => {
    return 5
  }

function TestState (){

    let [count, setCount] = useState( Num() )

    let subtracting = () =>{
      console.log("minus here")
    }
  
    function adding(){
      console.log("i am add")
    }
    return(
        <div>
            <button onClick={subtracting}>-</button>
            <span>{count}</span>
            <button onClick={adding}>+</button>
        </div>
    )
}

export default TestState