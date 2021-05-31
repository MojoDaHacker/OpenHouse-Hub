import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'

const VisitorSignIn = props => {
  const formTypes = ["Name", "Phone", "Realtor"];
  const [currentForm, changeCurrentForm] = useState(0);
  const [visitor, addVisitor] = useState({});
  const [isChecked, setCheck] = useState(false);
  const [input, setInput] = useState("");
  const [appreciate, setAppreciation] = useState(false);

  useEffect(() => {
    if (currentForm > 2) {
      props.visitorsState[1](visitors => [...visitors, visitor])
      // saveVisitor(visitor)
      showAppreciation()
      changeCurrentForm(0)
    }
  }, [props.visitorsState[0], visitor, isChecked])

  const showAppreciation = () => {
    setAppreciation(true)
    setTimeout(() => {
      setAppreciation(false)
    }, 4000);
  }
  const handleVisitors = e => currentForm !== 2 ? setInput(e.target.value) : setCheck(!isChecked)
  const handleSubmit = e => {
    e.preventDefault();
    e.stopPropagation();

    if (currentForm !== 2) {
      setInput("")
      addVisitor(visitor => ({...visitor, [formTypes[currentForm]] : input}))
      changeCurrentForm(currentForm + 1)
    } else {
      addVisitor(visitor => ({...visitor, [formTypes[currentForm]] : isChecked}))
      changeCurrentForm(currentForm + 1)
      setCheck(false)
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="p-2 text-center">
        <Form.Label>{appreciate ? `Enjoy the tour ${visitors[visitors.length - 1].Name.split(" ")[0]}` : "Please Sign In" }</Form.Label>
        {currentForm == 2 ? (
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
            type={formTypes[currentForm]} 
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

export default VisitorSignIn