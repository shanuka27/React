import React from 'react'
import { Link } from 'react-router-dom'

export default function Dashboard() {
  return (
    <div>
        This is dashboard<br />
        <Link to="/products" className='underline'>Go to products</Link>
    </div>
  )
}
