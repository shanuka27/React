import { useState } from "react"
import './Clock.css'

const Clock = () => {

    let time = new Date().toLocaleTimeString()
    let date = new Date()

    const [ currentTime , setCurrentTime] = useState()
    const todayDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear()

    const updateTime = () => {
        let time = new Date().toLocaleTimeString()
        setCurrentTime(time)
    }

    setInterval(updateTime, 1000)

    return(
        <div className="clock">
            <div className="box">
                    <h1>{currentTime}</h1>
                    <h1>{todayDate}</h1>
                <div className="box-container">
                    Hello There...
                </div>
            </div>
        </div>
    )
}

export default Clock