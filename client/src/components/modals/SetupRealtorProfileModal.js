import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import RealtorProfileForm from '../forms/RealtorProfileForm'



const SetupRealtorProfileModal = ({ show, updateRealtorProfile}) => {
  const [showModal, setModal] = useState(show)
  const dismissModal = () => setModal(!show)

  return (
    <Modal show={showModal}>
      <Modal.Body>
        <p>It doesn't look like you have your realtor profile set up yet, let's do that now.</p>
        <RealtorProfileForm dismissModal={dismissModal} updateRealtorProfile={updateRealtorProfile} />
      </Modal.Body>
    </Modal>
  )
}

export default SetupRealtorProfileModal