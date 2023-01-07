import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['shanu','yasiru','gamage']
//     const nameList = names.map(name => <h2>{name}</h2>)
//   return (
//     <div>
//             {nameList}
//     </div>
//   )

    const person = [
        {
            id:1,
            name:'shanu',
            age:21,
            skill: 'React'
        },
        {
            id:2,
            name:'yasi',
            age:30,
            skill: 'Node'
        }
    ]
    const nameList = names.map((name, index) => <h2 key={index}>{index}{name}</h2> )
    return <div>{nameList}</div>
}

export default NameList