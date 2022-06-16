import {useState} from 'react';

import Modal from "./Modal";
import Backdrop from "./Backdrop";

const Todo = (props) => {
   const [modalIsOpen, setModalIsOpen] = useState(false); //react hook called directly in react components.// creates a state react is aware of // useState alWAYS  returns TWO elemtns in an array // first elemenet modelisOpen is the current state snapshot second element setModalisOpen is a function is what allows to change the value. you call the second function to change the value. 
 function deleteHandler () {
        //overlay code opens modal
        setModalIsOpen(true);
        // change value from false to true 
        //conditionally render the compoenent 
    }

    function closeModalHandler() {
        setModalIsOpen(false);
    }

  return (
    <div>
      <div className='card'>
        <h2>{props.text}</h2>
        <div className='actions'>
          <button className='btn' onClick={deleteHandler}>
            Delete
          </button>
        </div>
      </div>
      {/* {modalIsOpen ? <Modal /> : null} */}
      {modalIsOpen && (
        <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
      )}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </div>
  );
}

export default Todo