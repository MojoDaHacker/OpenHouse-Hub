import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'

import * as yup from 'yup';

const schema = yup.object().noUnknown().shape({
  name: yup.string(),
  phone: yup.number().positive().integer(),
  realtor: yup.boolean(),
});

const VisitorSignIn = props => {
  const formTypes = ["name", "phone", "realtor"];
  const [ formState, setFormState ] = useState({
    currentForm: 0,
    visitor: {},
    isChecked: false,
    input: "",
    appreciate: false,
    validationFeedback: {}
  })
  const saveVisitor = props.saveVisitor

  useEffect(() => {
    if (formState.currentForm > 2) {
      saveVisitor(formState.visitor)
      .then(() => {
        showAppreciation()
        setFormState(formState => ({ ...formState, input: "", validationFeedback: {}, currentForm: 0 }))
      })
    }
  }, [formState.currentForm])

  const showAppreciation = () => {
    setFormState(formState => ({...formState, appreciate: true}))
    setTimeout(() => {
      setFormState(formState => ({...formState, visitor: {}, appreciate: false}))
    }, 4000);
  }
  const handleInputChange = e => {
    const value = e.target.value

    return ( 
      formState.currentForm !== 2 ?
        setFormState(formState => ({...formState, input: value})) :
        setFormState(formState => ({...formState, isChecked: !formState.isChecked}))
    )

  }
  const handleSubmit = e => {
    e.preventDefault(); e.stopPropagation();

    const key = formTypes[formState.currentForm]
    const objToValidate = {
      [key] : formState.currentForm === 2 ? formState.isChecked : formState.input
    }

    // first validate submission 
    // if submission is valid, save user
    // or show invalid feedback

    schema.validate(objToValidate, { strict: false })
    .then(val => saveInput(val))
    .catch(err => {
      console.log(err.path)
      setFormState(formState => ({...formState, validationFeedback: {
      [err.path] : true
    }}))})
    
  }
  const saveInput = validatedInput => {
    setFormState(formState => ({
      ...formState,
      isChecked: false,
      input: "",
      currentForm: formState.currentForm + 1,
      validationFeedback: {},
      visitor: { 
        ...formState.visitor,
        ...validatedInput
      }, 
    }))
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="p-2 text-center">
        <Form.Label>{formState.appreciate ? `Enjoy the tour ${formatAppreciationName(formState.visitor.name)}` : "Please Sign In" }</Form.Label>
        {formState.currentForm === 2 ? (
          <Form.Check
            onChange={handleInputChange}
            type="checkbox"
            label={`Have a ${formTypes[formState.currentForm]}?`}
          />
        ) : (
          <>
            <Form.Control 
              required
              className="border-0 bg-transparent text-center"
              value={formState.input} 
              name={formTypes[formState.currentForm]} 
              onChange={handleInputChange} 
              type="text" 
              isInvalid={formState.validationFeedback[formTypes[formState.currentForm]]}
              placeholder={capitalizeFirstLetter(formTypes[formState.currentForm])}
            />
            <Form.Control.Feedback type="invalid">{capitalizeFirstLetter(formTypes[formState.currentForm])} submission is invalid!</Form.Control.Feedback>
          </>
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
    return capitalizeFirstLetter(name)
  }
}

const capitalizeFirstLetter = word => {
  if(typeof word !== "string")
    return 
  return word[0].toUpperCase() + word.slice(1)
}

export default VisitorSignIn