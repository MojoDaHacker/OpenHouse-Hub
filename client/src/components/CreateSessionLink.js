import React from 'react'
import { Button } from 'react-bootstrap'
import { Plus } from 'react-bootstrap-icons'
import { useHistory } from 'react-router-dom'

const CreateSession = props => {
  const history = useHistory();

  return <Button className="m-3">{props.children}<span><Plus/></span></Button>
}

export default CreateSession