import React from 'react'
import './myStyle.css'

function StyleSheet(props) {
    let classname = props.primary ? 'primary' : ''
  return (
    <div>
        <h1 className={`${classname} font-xl`}>he he</h1>
    </div>
  )
}

export default StyleSheet