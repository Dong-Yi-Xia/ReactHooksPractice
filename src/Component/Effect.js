import React, {useState, useEffect} from 'react'


function Effect(){

    let [windowWidth, setwindowWidth] = useState(window.innerWidth)
    let [windowHeight, setwindowHeight] = useState(window.innerHeight)
    let [resource, setResource] = useState('posts')
    let [items, setItems] = useState([])


    const handleResize = () => {
        setwindowWidth(window.innerWidth)
        setwindowHeight(window.innerHeight)
    }

    //can use multiple useEffect
    useEffect( () => {
        window.addEventListener('resize', handleResize)

        //return the cleanup for unMount, removing eventListener before adding new eventListener
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    // if the second params is empty [], get render once, onMount, 
    // else it will re-render everytime there is a change.
    useEffect( () => {
        console.log("rendering from effect", resource)
        fetch(`https://jsonplaceholder.typicode.com/${resource}`)
            .then(response => response.json())
            .then(json => setItems(json))
        return () => {
            console.log("I am cleaning now, All New Now")
        }    
    }, [resource])


    let theItems = items.map(item => {
        return  <pre key={item.id}> {JSON.stringify(item)} </pre>
    })

    let thealbums = () => {
        setResource('albums')
    }

    return(
        <div>
            <p>width: {windowWidth}</p>
            <p>height: {windowHeight}</p>
            <button onClick={() => setResource('posts')}> Posts</button>
            <button onClick={() => setResource('users')} >Users</button>
            <button onClick={thealbums}> Albums </button>
            <h1> {resource} </h1>
            {theItems}
        </div>
    )
}

export default Effect