import React, {useState} from 'react'
import {Button, Modal} from 'react-bootstrap'

const EndSessionButton = props => {
  const [showModal, changeModal] = useState(false);

  const endSession = () => {
    fetch('/api/sessions/endSessionCSV')
    .then(res => {
      if(res.status == 200){
        return res.blob()
      } else {
        throw Error(`Request rejected with status ${res.status}`)
      }
    })
    .then(blob => {
      let url = URL.createObjectURL(blob);
      let a = document.createElement('a');
      a.href = url;
      a.click();
      changeModal(false)
    })
    .catch(console.error)
  }

  if (props.numVisitors == 0) {
    return null
  }

  return (
    <>
      <Modal
        show={showModal}
        backdrop="static"
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header className="text-center">
          <h3>Are you sure?</h3>
        </Modal.Header>
        <Modal.Body className="">
          <div className="w-50 mx-auto">
            <Button className="float-left" onClick={() => changeModal(false)}>Cancel</Button>
            <Button className="float-right" variant="danger" onClick={endSession}>End Session</Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default EndSessionButton