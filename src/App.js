import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import "./App.css"
import { Button } from 'react-bootstrap';
import { Row, Col, Container, FormControl, InputGroup, ButtonGroup, ListGroup, Alert } from 'react-bootstrap';
import moment from "moment"
import { AiFillDelete } from "react-icons/ai"
import nextId from "react-id-generator";

function App() {
  const [values, setValues] = useState(new Date());
  const [input, setInput] = useState("")
  const [notes, setNotes] = useState([]);
  const [filters, setFilters] = useState([]) 

  //Id Generator
  const taskId = nextId()
  const task = [
    {
      id: taskId,
      day: moment(values).format("DD"),
      month: moment(values).format("MM"),
      year: moment(values).format("YYYY"),
      note: input
    }
  ]

  // add task function
  const addTask = (e) => {
    setNotes(notes.concat(task))
    console.log(notes)
    alert(moment(values).format("DD/MM/YYYY") + " " + "Tarihi için görev başarıyla eklendi.")
    setInput("")
  }

  // Get task function
  const filter = () => {
    setFilters(notes.filter(name => name.day === moment(values).format("DD"))) 
  }


  return (
    <div id='container'>      
      <Container className='mt-10'>
        <h1>Task Manager</h1>
        <Row className='mt-5'>
          <Col sm={7}>
            <Calendar
              onChange={setValues}
              value={values}
              className=" border-4 p-2"
              onClickDay={filter}
            />

          </Col>
          <Col sm={5}>
            {/* <input className='h-8' value={input} onChange={(e) => setInput(e.target.value)} placeholder='note ekleyiniz...' />
            <Button size='sm' onClick={addTask} variant="danger">Danger</Button> */}
            <div id='input'>
            <InputGroup  size='sm' >
              <FormControl
                placeholder="Add tasks"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                value={input} onChange={(e) => setInput(e.target.value)}
              />
              <Button
                variant="outline-secondary" id="button-addon2" onClick={addTask} >
                Add
              </Button>
              <Button
                variant="outline-secondary" id="button-addon2" onClick={filter}>
                Get Task
              </Button>
             
            </InputGroup>
            </div>

            <div>
              {/* {
                notes.map((item, i) => {
                  return (
                    <div key={i}>{item.day}/{item.month}/{item.year},{item.note}</div>
                  )
                })
              } */}
            </div>

            <div id='task'>
              <div id='comment'>
                <h6 className='p-1'>{moment(values).format("DD/MM/YYYY")} Tarihinde yapılacakları görmek için "Get Task" butonunu kullanın...</h6>
              </div>
              <div id='task-list' >
                <ListGroup >
                  {
                    filters.map((fil, i) => {
                      
                          return  ( <ListGroup.Item key={i}>{fil.note} <span id='delete-button' > <AiFillDelete /></span></ListGroup.Item>)
                      
                    })
                  } 
           
                </ListGroup>

              </div>

            </div>
          </Col>
        </Row>
        <Row>
          <Col>
          </Col>
        </Row>
      </Container>
    </div>







  );
}

export default App;
