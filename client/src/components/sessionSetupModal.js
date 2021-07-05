import React, {useState, useRef, useEffect} from 'react'
import {Form, Button, Modal, Carousel} from 'react-bootstrap'
import {CheckCircle} from 'react-bootstrap-icons'
import bsCustomFileInput from 'bs-custom-file-input'


const SetupModal = ({changeHost, changeAvatar}) => {
  const [host, changeHostInfo] = changeHost
  const setupTypes = [
    {
      form: "name",
      type: "text"
    },
    {
      form: "email",
      type: "email"
    },
    {
      form: "mobile",
      type: "tel"
    },
    {
      form: "company",
      type: "text"
    },
    {
      form: "picture",
      type: "file"
    },
  ];
  const [modal, setModal] = useState(true);
  const [input, setInput] = useState("");
  const fileObj = useRef(null)
  const [index, setCarouselIndex] = useState(0);
  const [setupIndex, setSetupIndex] = useState(0);

  const delInfo = () => {
    var arr = host;
    arr.pop()
    changeHostInfo([...arr])
    setSetupIndex(setupIndex - 1)
  }

  useEffect(() => {
    if (setupIndex < setupTypes.length && setupTypes[setupIndex].type == "file") bsCustomFileInput.init()
  })

  const addInfo = e => {
    e.preventDefault();
    e.stopPropagation();
    if(setupIndex !== setupTypes.length - 1) {
      changeHostInfo(prevHost => ({...prevHost, [setupTypes[setupIndex].form]: input}))
      setSetupIndex(setupIndex + 1)
    } else {
      const file = fileObj.current.files[0]
      const fileURL = URL.createObjectURL(file)
      changeAvatar(fileURL)
      setTimeout(() => {
        setModal(false)
        setSetupIndex(0)
      }, 2000);
      setSetupIndex(setupIndex + 1)
    }
    setInput("")
  }

  return (
    <Modal
      size="lg"
      backdrop="static"
      show={modal}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header>
        <Modal.Title id="example-modal-sizes-title-lg">
          OpenHouse Hub
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Carousel activeIndex={index} controls={false} indicators={false} interval={null}>
          <Carousel.Item className="text-center">
            <p>
              Here is a simple sign in sheet for you to use at your open house.
              It's pretty simple, have your guests sign in and tour the home. When 
              your open house is finished, you can download a csv file with all the leads recorded.
            </p>
            <p>
              Pretty simple, right?
            </p>
            <Button onClick={() => setCarouselIndex(index + 1)}>Got it!</Button>
          </Carousel.Item>
          <Carousel.Item className="text-center">
            {setupIndex !== setupTypes.length ? (
              <>
                <h4>Ok, just a few questions to get you started.</h4>
                <Form onSubmit={addInfo}>
                  <Form.Group>
                    <Form.Label>Can I have your {setupTypes[setupIndex].form}?</Form.Label>
                    {setupIndex !== 4 ?
                      <Form.Control type={setupTypes[setupIndex].type} className="w-75 mx-auto text-center" onChange={e => setInput(e.target.value)} value={input} required/>:
                      <Form.File type={setupTypes[setupIndex].type} className="custom-file" label="JPG, JPEG, PNG" ref={fileObj} custom required/>
                    }
                    {setupIndex !== 0 ? <Button type="button" variant="danger" className="m-2" onClick={delInfo}>Back</Button> : null}
                    <Button type="submit" className="m-2">{setupIndex !== setupTypes.length - 1 ? "Next" : "Finish"}</Button>
                  </Form.Group>
                </Form>
              </>
            ) : (
              <>
                <h4>Session Started!</h4>
                <CheckCircle className="text-success w-100" />
              </>
            )}
          </Carousel.Item>
        </Carousel>
      </Modal.Body>
    </Modal>
  )
}

export default SetupModal