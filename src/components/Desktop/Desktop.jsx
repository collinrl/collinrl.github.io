import React from "react"
import "./Desktop.css"

const Desktop = () => {
    return (
        <div className="desktop">
            <div className="icon welcome-icon">
                <img
                    src="https://win98icons.alexmeub.com/icons/png/world-0.png"
                    alt="World icon"
                />
                <span>Welcome</span>
            </div>
            <div className="icon my-info-icon">
                <img
                    src="https://win98icons.alexmeub.com/icons/png/directory_closed-0.png"
                    alt="Folder icon"
                />
                <span>My Info</span>
            </div>
            <div className="icon projects-icon">
                <img
                    src="https://win98icons.alexmeub.com/icons/png/write_yellow-1.png"
                    alt="Notepad icon"
                />
                <span>My Projects</span>
            </div>
            <div className="icon contact-me-icon">
                <img
                    src="https://win98icons.alexmeub.com/icons/png/message_envelope_open-0.png"
                    alt="Open envelope icon"
                />
                <span>Contact Me</span>
            </div>
        </div>
    )
}

export default Desktop
