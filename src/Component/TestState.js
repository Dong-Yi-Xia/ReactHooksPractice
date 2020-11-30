import React, {useState} from 'react'



let Num = () => {
    console.log("running a function")
    return 5
  }

function TestState (){

    //useState callback function will render 1 time on inital. Just passing in Num() will re-render everytime onClick.
    let [count, setCount] = useState( () => Num() )

    //implied arrow function. else {return "blue"}
    let [color, setColor] = useState( () => "blue" )

    const randomColor = () => {
      let colors = ["blue", "red", "green", "pink", "yellow"]
      let randNum = Math.floor(Math.random() * colors.length )
      return colors[randNum]
    } 

    let subtracting = () =>{
      setCount(preCount => preCount - 1)
      setColor(randomColor())
      console.log("minus here")
    }
  
    function adding(){
      setCount(preCount => preCount + 1)
      setColor(randomColor())
      console.log("i am add")
    }
    return(
        <div>
            <button onClick={subtracting}>-</button>
            <button onClick={adding}>+</button>
            <span>{count}</span>
            <span>{color}</span>
        </div>
    )
}

export default TestState