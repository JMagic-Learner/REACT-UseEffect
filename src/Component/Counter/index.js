import React from 'react'
import {useEffect, useState} from 'react'


const Counter = () => {
    const [count, setcount] = useState(0)
    const [isAlert, setIsAlert] = React.useState(false)
    const [alertUIDormant, setAlertUIActive] = useState("You have not clicked yet")
    const counterRef = React.useRef(count)
    const alertUIRef = React.useRef(alertUIDormant)
    const addition = () => {
        setcount(count+1)
    }
    const subtraction = () => {
        setcount(count-1)
        
    }

    const alertFunction = () => {
        console.log("counter alert", count)
        setTimeout(() => {
            alert(counterRef.current)
        }, 5000)
    }

    const alertUI = () => {
        if (count == counterRef) {
            return <p> You have not clicked yet</p>
        } else if (count <=10 ) {
            return <p> You have begun clicking the button</p>
        } else {
            return <h1> You have clicked many times </h1>
        }
    }

    useEffect(() => {
        if (isAlert) {
            alert(count)
            setIsAlert(false)
        }
    }, [isAlert])

    useEffect(() => {
        if (counterRef) {
            console.log("This is the counterRef", counterRef)
            console.log("CounterRef should display the first reference or instance that count has been invoked.")
            console.log("This is the Count", count)
        }
    }, [count])

    useEffect(() => {
        if (counterRef) {
            setAlertUIActive('You have begun clicking the button')
        }
        if (alertUIRef) {
            console.log(alertUIRef)
        }
    }, [count])



    return (

        <div id="counter-container">
            <h1> You have clicked {count} times</h1>
            <button onClick={addition}>
                Click to add
            </button>
            <button onClick={subtraction}>
                Click to add
            </button>
            <div id="alert-container">
               <p id="alert-ui"> {alertUIDormant} </p>
            </div>
        </div>
        
    )
}

export default Counter