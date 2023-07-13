import React, { useState } from "react"
import "./MainBox.css"

function MainBox() {
    const [activeButton, setActiveButton] = useState("home")
    const [isDarkMode, setIsDarkMode] = useState(true) // Set initial mode to dark

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName)
    }

    const toggleMode = () => {
        setIsDarkMode(!isDarkMode)
    }

    const renderContent = () => {
        if (activeButton === "home") {
            return (
                <div className="bio-container">
                    <div className="bio">
                        <p>
                            I was born in 2003 in Barre, Vermont. I have a deep
                            passion for video games and everything to do with
                            computers. I want to be able to show my creativity
                            through my code and website designs.
                        </p>
                    </div>
                </div>
            )
        } else {
            return null // Return null for other categories
        }
    }

    return (
        <div className={`main-box ${isDarkMode ? "dark-mode" : "light-mode"}`}>
            <div className="mode-toggle">
                <button className="toggle-button" onClick={toggleMode}>
                    {isDarkMode ? (
                        <i className="fas fa-moon"></i>
                    ) : (
                        <i className="fas fa-sun"></i>
                    )}
                </button>
            </div>
            <div className="name-container">
                <p className="name">Collin Letourneau</p>
                <p className="subtext">Software Engineer and Web Developer</p>
                <div className="button-list">
                    <button
                        className={activeButton === "home" ? "active" : ""}
                        onClick={() => handleButtonClick("home")}
                    >
                        Home
                    </button>
                    <button
                        className={activeButton === "projects" ? "active" : ""}
                        onClick={() => handleButtonClick("projects")}
                    >
                        Projects
                    </button>
                    <button
                        className={activeButton === "info" ? "active" : ""}
                        onClick={() => handleButtonClick("info")}
                    >
                        Info
                    </button>
                    <button
                        className={activeButton === "contact" ? "active" : ""}
                        onClick={() => handleButtonClick("contact")}
                    >
                        Contact
                    </button>
                </div>
            </div>
            {renderContent()}
            {/* Content of the MainBox component */}
        </div>
    )
}

export default MainBox
