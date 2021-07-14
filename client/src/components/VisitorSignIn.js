import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'

const VisitorSignIn = props => {
  const formTypes = ["Name", "Phone", "Realtor"];
  const [currentForm, changeCurrentForm] = useState(0);
  const [visitor, defineVisitor] = useState({});
  const [isChecked, setCheck] = useState(false);
  const [input, setInput] = useState("");
  const [appreciate, setAppreciation] = useState(false);

  const saveVisitor = props.saveVisitor

  useEffect(() => {
    if (currentForm > 2) {
      saveVisitor(visitor)
      .then(() => {
        showAppreciation()
        changeCurrentForm(0)
      })
    }
  }, [currentForm])
  const showAppreciation = () => {
    setAppreciation(true)
    setTimeout(() => {
      setAppreciation(false)
      defineVisitor({})
    }, 4000);
  }
  const handleVisitors = e => currentForm !== 2 ? setInput(e.target.value) : setCheck(!isChecked)
  const handleSubmit = e => {
    e.preventDefault();
    e.stopPropagation();
    const key = formTypes[currentForm].toLowerCase()

    if (currentForm !== 2) {
      setInput("")
      defineVisitor(visitor => ({...visitor, [key] : input}))
      changeCurrentForm(currentForm + 1)
    } else {
      defineVisitor(visitor => ({...visitor, [key] : isChecked}))
      changeCurrentForm(currentForm + 1)
      setCheck(false)
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="p-2 text-center">
        <Form.Label>{appreciate ? `Enjoy the tour ${formatAppreciationName(visitor.name)}` : "Please Sign In" }</Form.Label>
        {currentForm === 2 ? (
          <Form.Check
            onChange={handleVisitors}
            type="checkbox"
            label={`Have a ${formTypes[currentForm]}?`}
          />
        ) : (
          <Form.Control 
            required
            className="border-0 bg-transparent text-center"
            value={input} 
            name={formTypes[currentForm]} 
            onChange={handleVisitors} 
            type="text" 
            placeholder={formTypes[currentForm]} 
          />
        )}
      </Form.Group>
      <Form.Group className="mt-3 text-center">
        <Button type="sumbit">Submit</Button>
      </Form.Group>
    </Form>
  )
}

const formatAppreciationName = name => {
  if(name.trim().includes(" ")){
    return name.slice(0, name.indexOf(" "))
  } else {
    return name
  }
}

export default VisitorSignIn