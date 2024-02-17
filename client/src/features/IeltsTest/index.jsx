import React from 'react'
import { Link } from 'react-router-dom'

function TestList() {
  return (
    <>
      <h1>IELTS Listening Test</h1>
      <Link to="/" >Back Home</Link> | {" "}
      <Link to="/test/1" >Test 1</Link> | {" "}
      <Link to="/test/2" >Test 2</Link>
    </>
  )
}

export default TestList