import React, {useState, useRef, useEffect} from 'react'
import {Form, Button, Modal} from 'react-bootstrap'
import bsCustomFileInput from 'bs-custom-file-input'


const host = {
  name:"",
  phone:"",
  email:"",
  company:"",
}

const EditHostModal = ({changeHost, changeAvatar, editKit}) => {
  const [host, changeHostInfo] = changeHost
  const [edit, editHost] = editKit
  const fileObj = useRef(null)

  bsCustomFileInput.init()

  const handleSubmit = e => {
    e.preventDefault();
    e.stopPropagation();
    editHost(false);
  }

  return (
    <Modal
      size="lg"
      show={edit}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {Object.entries(host).map((val,i) => (
            <Form.Group>
              <Form.Label>{val[0]}</Form.Label>
              {val[0] !== "file" ?
                <Form.Control type={val[0]} className="w-75 mx-auto text-center" onChange={e => changeHostInfo({...host, [val[0]]: e.target.value})} value={host[val[0]]} required/>:
                <Form.File type={val[0]} className="custom-file" label="JPG, JPEG, PNG" ref={fileObj} custom required/>
              }
            </Form.Group>
          ))}
          <Button type="submit" className="m-2">Save</Button>
        </Form>
      </Modal.Body>
    </Modal>
  )
}

export default EditHostModal