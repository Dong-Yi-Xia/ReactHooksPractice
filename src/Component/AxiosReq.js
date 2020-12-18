import React, {useState, useEffect} from 'react'
import axios from 'axios'
import uuid from 'react-uuid'

function AxiosReq (){

    let [person, setPerson] = useState([])

    //*Remember second params ins useEffect is a [], to render once, else it will rendering forever 
    //causing memory leak. 
    useEffect(()=>{
        axios.get('http://localhost:3000/users')
        .then(res => {
            console.log(res.data)
            setPerson(res.data)
        })
    },[])

    // console.log(person)
    let list = person.map(pp => {
        return <li key={pp.id}> {pp.name} </li>
    })

// ###### add a new user to list

    let [name, setName] = useState("i am blank")

    let handleChange = (evt) => {
        // console.log(evt.target.value)
        setName(evt.target.value)
    }

    let handleSubmit = (evt) => {
        evt.preventDefault()

        let user = () => {
            return {name:name, age:5}
        }
        // axios.post('http://localhost:3000/users', {name} )
        axios.post('http://localhost:3000/users', user() )
        .then(res => {
            console.log(res.data)
            setName("")
            setPerson(preState => [...preState, res.data])
        })
    }

    return(
        <div>
            <ul>
                 {list}
            </ul>

            <form onSubmit={handleSubmit}>
                <label>
                    person name:
                    <input type="text" name="name" value={name} onChange={handleChange} />
                </label>
                <button type="submit">Add</button>
            </form>

        </div>
    )
}

export default AxiosReq