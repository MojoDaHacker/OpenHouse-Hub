import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {Button, Modal} from 'react-bootstrap'
import styled from 'styled-components'
import {SessHook} from '../contexts/sessContext'

const EndSessionButton = props => {
  const session = SessHook();
  const history = useHistory();
  const [showModal, changeModal] = useState(false);

  const endSession = () => {
    console.log(session);
    session.createSession(false);
    history.push("/");
  }

  const Border = styled.div.attrs(props => ({
    className: props.className
  }))`
    border-image: radial-gradient(red, yellow, green);
    border-image-slice: 1;
  `
  const StyledButton = styled(Button).attrs(props => ({
    className: props.className,
    onClick: props.onClick
  }))`
    background-image: linear-gradient(#f02b2b, #8f1735);
    font-weight: bold;
  `

  return (
    <>
      <Modal
        show={showModal}
        backdrop="static"
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header>
          <h3>Are you sure you want to end the Session?</h3>
        </Modal.Header>
        <Modal.Body>
          <Button onClick={() => changeModal(false)}>Cancel</Button>
          <Button variant="danger" onClick={endSession} >End Session</Button>
        </Modal.Body>
      </Modal>
      <StyledButton onClick={() => changeModal(true)} className="border-0">End Session</StyledButton>
    </>
  )
}

export default EndSessionButton