import React from 'react'
import { ReactDOM } from 'react'
import photo from '../images/airbnb.png'
export default function Jokeset({ setup, punchline }) {
  return (
    <div className="Jokeset">
      <h1>Setup:{setup}</h1>
      <p>Punchline{punchline}</p>
    </div>
  )
}
