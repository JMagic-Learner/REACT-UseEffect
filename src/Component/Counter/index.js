import React from 'react'
import {useEffect, useState} from 'react'


const Counter = () => {
    const [count, setcount] = useState(0)
    const [isAlert, setIsAlert] = React.useState(false)
    const counterRef = React.useRef(count)
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


    return (
        <div id="counter-container">
            <h1> You have clicked {count} times</h1>
            <button onClick={addition}>
                Click to add
            </button>
            <button onClick={subtraction}>
                Click to add
            </button>
        </div>
    )
}

export default Counter