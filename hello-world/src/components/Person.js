import React from 'react'

function Person({person, key}) {
  return (
    <div>
            <h2>I am {person.name} ane i'm {person.age} years old and i'm expert in {person.skill}</h2>
    </div>
  )
}

export default Person