import React, {useState, useEffect} from 'react'
import axios from 'axios'

function AxiosAdd (){

    let [name, setName] = useState("")


    let handleChange = (evt) => {
        // console.log(evt.target.value)
        setName(evt.target.value)
    }

    let handleSubmit = (evt) => {
        evt.preventDefault()

        //this a data payload
        const user = {newNameAdded: name}

        axios.post('https://jsonplaceholder.typicode.com/users', {user})
        .then(res => {
            // console.log(res)
            console.log(res.data)
        })
    }
 
   

    // console.log(name)   
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    person name:
                    <input type="text" name="name" onChange={handleChange} />
                </label>
                <button type="submit">Add</button>
            </form>


        </div>
    )
}

export default AxiosAdd