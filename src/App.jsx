import { useState } from "react"
import Taskbar from "./components/Taskbar/Taskbar"
import Desktop from "./components/Desktop/Desktop"
import "./App.css"

function App() {
    return (
        <>
            <Desktop />
            <Taskbar />
        </>
    )
}

export default App
