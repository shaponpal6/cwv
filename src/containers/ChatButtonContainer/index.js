import React from 'react'
import PropTypes from 'prop-types'

function ChatButton({onClick, title}) {
    return (
        <div>

            <button onClick={(e)=>onClick(e)}>{title}</button>
        </div>
    )
}

ChatButton.propTypes = {
onClick: PropTypes.func.isRequired,
title: PropTypes.string.isRequired
}

export default ChatButton

