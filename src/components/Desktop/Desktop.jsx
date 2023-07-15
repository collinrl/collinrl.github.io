import React, { useState } from "react"
import "./Desktop.css"
import emailjs from "@emailjs/browser"

const Desktop = () => {
    const [isEmailWindowOpen, setEmailWindowOpen] = useState(false)

    const handleEmailIconDoubleClick = () => {
        setEmailWindowOpen(true)
    }

    const handleCloseEmailWindow = () => {
        setEmailWindowOpen(false)
    }

    const sendEmail = (event) => {
        event.preventDefault()

        emailjs
            .sendForm(
                "service_towsouj",
                "template_xh7veri",
                event.target,
                "q3oxmN1P6nNpyuRlv"
            )
            .then(
                (result) => {
                    console.log(result.text)
                    handleCloseEmailWindow()
                },
                (error) => {
                    console.log(error.text)
                }
            )
    }

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
            <div
                className="icon email-me-icon"
                onDoubleClick={handleEmailIconDoubleClick}
            >
                <img
                    src="https://win98icons.alexmeub.com/icons/png/message_envelope_open-0.png"
                    alt="Open envelope icon"
                />
                <span>Email Me</span>
            </div>

            {isEmailWindowOpen && (
                <div className="email-window">
                    <div className="email-window-content">
                        <div className="email-window-header">
                            <span className="email-window-title">
                                New Message
                            </span>
                            <button
                                className="email-window-close-button"
                                onClick={handleCloseEmailWindow}
                            >
                                <img
                                    src="https://win98icons.alexmeub.com/images/close-icon.png"
                                    alt=""
                                />
                            </button>
                        </div>
                        <div className="email-window-body">
                            <form onSubmit={sendEmail}>
                                <div className="email-window-input-container">
                                    <label htmlFor="email-window-to-input">
                                        To:
                                    </label>
                                    <input
                                        id="email-window-to-input"
                                        type="text"
                                        className="email-window-input"
                                        value="collin.r.letourneau@gmail.com"
                                        readOnly
                                    />
                                </div>
                                <div className="email-window-input-container">
                                    <label htmlFor="email-window-from-input">
                                        From:
                                    </label>
                                    <input
                                        id="email-window-from-input"
                                        type="text"
                                        className="email-window-input"
                                        name="from_name"
                                    />
                                </div>
                                <div className="email-window-input-container">
                                    <label htmlFor="email-window-subject-input">
                                        Subject:
                                    </label>
                                    <input
                                        id="email-window-subject-input"
                                        type="text"
                                        className="email-window-input"
                                        name="subject"
                                    />
                                </div>
                                <div className="email-window-input-container">
                                    <label htmlFor="email-window-body-input">
                                        Body:
                                    </label>
                                    <textarea
                                        id="email-window-body-input"
                                        className="email-window-textarea"
                                        placeholder="Enter your message here"
                                        name="body"
                                    ></textarea>
                                </div>
                                <div className="email-window-buttons">
                                    <button
                                        type="submit"
                                        className="email-window-send-button"
                                    >
                                        <img
                                            src="https://win98icons.alexmeub.com/icons/png/envelope_closed-0.png"
                                            alt=""
                                        />
                                        Send
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Desktop
