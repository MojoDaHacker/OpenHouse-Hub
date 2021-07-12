import React from 'react'
import { useHistory } from 'react-router-dom'
import SettingsSideNav from "../components/SettingsSideNav.js"
import ProfilePic from '../assets/img/profile.jpg'
import { Container, Col, Row, Button, Tab } from 'react-bootstrap'

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
    <Container className="mt-3">
      <Tab.Container defaultActiveKey={1}>
        <Row className="border overflow-hidden shadow" style={{ borderRadius: 20 }} noGutters>
          <Col xs={2} >
            <SettingsSideNav />
          </Col>
          <Col>
            <Tab.Content className="p-3">
              <Tab.Pane eventKey={1}>
                <AccountSettings account={props.user} />
              </Tab.Pane>
              <Tab.Pane eventKey={2}>
                <GeneralSettings />
              </Tab.Pane>
              <Tab.Pane eventKey={3}>
                <SubscriptionSettings />
              </Tab.Pane>
              <Tab.Pane eventKey={4}>
                <NotificationSettings />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  )
}

const AccountSettings = ({ account }) => (
  <>
    <div>
      <h3>Plan</h3>
      <p>Free Plan</p>
    </div>
    <div>
      <h3>Account</h3>
      <div>
        <p>{account.name}</p>
        <p>{account.email}</p>
      </div>
      <div>
        <Button variant="light">Change Password</Button>
      </div>
    </div>
    <div>
      <h3>Realtor Profile</h3>
      <p>Realtor Picture</p>
      <p>Realtor Badges</p>
      <p>Realtor Contact</p>
      <p>Realtor Email</p>
      <p>Realtor Website</p>
    </div>
    <div>
      <p>Connected Accounts</p>
    </div>
    <div>
      <Button variant="danger">Delete Account</Button>
    </div>
  </>
)
const GeneralSettings = () => (
  <div>
    Hello
  </div>
)
const SubscriptionSettings = () => (
  <div>
    Hello
  </div>
)
const NotificationSettings = () => (
  <div>
    Hello
  </div>
)

export default Settings