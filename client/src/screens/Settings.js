import React from 'react'
import { useHistory } from 'react-router-dom'
import SettingsSideNav from "../components/SettingsSideNav.js"
import ProfilePic from '../assets/img/profile.jpg'
import { Container, Col, Row, Button, Tab } from 'react-bootstrap'
import { PencilSquare } from 'react-bootstrap-icons'

const Settings = props => {
  const history = useHistory();
  
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
                <AccountSettings account={props.user} logout={props.logOutUser} />
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

const AccountSettings = ({ account, logout }) => (
  <>
    <div className="border-bottom m-2">
      <h3>Plan</h3>
      <Container fluid>
        <p>Free Plan</p>
      </Container>
    </div>
    <div className="border-bottom m-2">
      <h3>Account</h3>
      <Container fluid>
        <p>{account.name}</p>
        <p>{account.email}</p>
        <div className="m-2">
          <Button variant="light">Change Password</Button>
        </div>
      </Container>
    </div>
    <div className="border-bottom m-2">
      <h3>Realtor Profile <Button variant="link"><PencilSquare size={18}/></Button></h3>
      <Container fluid>
        {Object.entries(account.profile).reverse().map((val, i) => (
          val[0] !== "_id" ? <p key={i}>{val[0][0].toUpperCase() + val[0].slice(1)} : {val[1]}</p> : null
        ))}
      </Container>
    </div>
    <div className="text-center">
      <Button variant="danger" onClick={logout}>Log Out</Button>
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