import React from 'react'
import { useHistory } from 'react-router-dom'
import SettingsSideNav from "../components/SettingsSideNav.js"
import ProfilePic from '../assets/img/profile.jpg'
import { Container, Col, Row } from 'react-bootstrap'

const Settings = props => {
  const history = useHistory();
  
  const logout = () => {
    fetch('/logout')
    .then(res => {
      if(res.status == 200) {
        // Cookies.remove('connect.sid', { path: '/' })
        // authKit.authorizeUser(false)
        // history.push("/")
      }
    })
  }

  return (
    <Container className="h-100 overflow-auto">
      <Row noGutters>
        <Col xs={3} >
          <SettingsSideNav />
        </Col>
        <Col>
          <div>
            Plan
          </div>
          <div>
            Name
            Email
            Password
            City
            State
            Realtor Picture
            Realtor Badges
            Realtor Contact
            Realtor Email
            Realtor Website
          </div>
          <div>
            Connected Accounts
          </div>
          <div>
            Delete Account
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Settings