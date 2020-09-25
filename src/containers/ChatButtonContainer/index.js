import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

function ChatButton({onClick, title}) {
    return (
        <div className="wpcwv-startChatButtonBox">
            <button className="wpcwv-startChatButton" onClick={(e)=>onClick(e)}>{title}</button>
        </div>
    )
}

ChatButton.propTypes = {
onClick: PropTypes.func.isRequired,
title: PropTypes.string.isRequired
}

export default ChatButton

