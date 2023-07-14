import React, { useState, useEffect } from "react"
import "./Taskbar.css"

const Taskbar = () => {
    const [currentTime, setCurrentTime] = useState("")

    useEffect(() => {
        const timer = setInterval(() => {
            const time = new Date().toLocaleTimeString([], {
                hour: "numeric",
                minute: "numeric",
                hour12: true,
            })
            setCurrentTime(time)
        }, 1000)

        return () => {
            clearInterval(timer)
        }
    }, [])
    return (
        <div className="taskbar-container">
            <div className="start-button-wrapper">
                <a href="">
                    <div className="start-button"></div>
                </a>
            </div>
            <span className="start-text">{currentTime}</span>
        </div>
    )
}

export default Taskbar
