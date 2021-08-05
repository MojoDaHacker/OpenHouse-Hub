import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import RealtorProfileForm from '../forms/RealtorProfileForm'



const SetupRealtorProfileModal = ({ updateRealtorProfile}) => {
  const [show, setModal] = useState(true)
  const handleCancel = () => setModal(!show)

  return (
    <Modal show={show}>
      <Modal.Body>
        <p>It doesn't look like you have your realtor profile set up yet, let's do that now.</p>
        <RealtorProfileForm onSubmit={updateRealtorProfile} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleCancel}>Cancel</Button>
        <Button type="submit">Save</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default SetupRealtorProfileModal