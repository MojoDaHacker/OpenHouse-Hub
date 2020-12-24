import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {Button} from 'react-bootstrap'
import styled from 'styled-components'
import {SessHook} from '../contexts/sessContext'

const EndSessionButton = props => {
  const session = SessHook();
  const history = useHistory();

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

  return <StyledButton onClick={endSession} className="border-0">End Session</StyledButton>
}

export default EndSessionButton