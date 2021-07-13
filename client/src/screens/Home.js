import React from 'react';
import WeatherDisplay from '../components/WeatherDisplay';
import ResumeSessionModal from '../components/ResumeSessionModal';
import Illustration1 from '../assets/illustrations/teamwork.svg'
import { Container, Row, Col, Button, Image, ListGroup } from 'react-bootstrap'
import { Plus, Window, Download, XLg, PeopleFill, HandThumbsUpFill } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'

export default class Home extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      recentLeads : [0],
      notifications : [],
    }
  }
  
  render(){
    const { user } = this.props
  
    return (
      <Container className="d-flex flex-column vh-100">
        <ResumeSessionModal show={user.hasActiveSession} />
        <Row className="h-100 m-3">
          <Col className="d-flex flex-column">
            <div className="border-bottom text-left mb-3">
              <h1>Open House Sessions</h1>
            </div>
            <div className="h-100">
              {user.completedSessions.length < 1 ? (
                <div className="mt-3 text-center">
                  <p className="mx-auto w-75">
                    You don't have any sessions. Start one now or schedule one for later and give your visitors a new open house experience.
                  </p>
                  <Image src={Illustration1} width="50%"/>
                </div>
              ) : (
                <ListGroup variant="flush">
                  {user.completedSessions.map((session, i) => (
                    <ListGroup.Item className="border-0" key={session+i}>
                      <Row className="pb-2 border-bottom">
                        <Col className="d-flex justify-content-between align-items-center">
                          <div>
                            <span className="">{session.address}</span>
                            <div>
                              <span className="m-1 text-muted fst-italic small">{new Date(session.date).toDateString()}</span>
                            </div>
                          </div>
                          <div>
                            <PeopleFill size={18}/><span className="m-3">{session.visitors.length}</span>
                            <HandThumbsUpFill size={18}/><span className="m-3">{session.visitors.length}</span>
                          </div>
                          <div>
                            <Button as={Link} variant="link" title="Open New Window" to="/sessiondetail/176254"><Window size={16} /></Button>
                            <Button as={Link} variant="link" title="Download" to="/"><Download size={16} /></Button>
                            <Button as={Link} variant="link" title="Delete" to="/"><XLg size={16} /></Button>
                          </div>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
              <div className="text-center">
                <Button className="m-3" as={Link} to="/session/252635">Create a Session<span><Plus/></span></Button>
              </div>
            </div>
          </Col>
          <Col xs={3}>
            <WeatherDisplay />
          </Col>
        </Row>
      </Container>
    )
  }
}
