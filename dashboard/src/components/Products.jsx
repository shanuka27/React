import React from 'react'
import { Link } from 'react-router-dom'

export default function Products() {
  return (
    <div>
        this is product page<br />
        <Link to="/dashboard" className='underline'>Go to dashboard</Link>
    </div>
  )
}
