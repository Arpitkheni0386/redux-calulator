import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { IncNumber,DecNumber,MulNumber,DivNumber } from './actions/Index';

export const App = () => {


 const mystate = useSelector((state) => state.changenumber  )
 const mymult = useSelector((state) => state.changemult  )
 const dispatch = useDispatch();

  return (
    <div>
  <h1>Increment & Decrement Counter</h1>
  <h1>React & Redux Tutorial</h1>
  <hr></hr>
  <hr></hr>
  <div>
    <button onClick={() => dispatch(IncNumber(5))}> + </button>
    <input type="text" name="quantity" value={mystate}/>
    <button onClick={() => dispatch(DecNumber())}> - </button>
  </div>
  <hr></hr>
  <h1>Multification & Division Counter</h1>
  <h1>React & Redux Tutorial</h1>
  <hr></hr>
  <hr></hr>
  <div>
    <button onClick={() => dispatch(MulNumber(5))}> * </button>
    <input type="text" name="quantity" value={mymult}/>
    <button onClick={() => dispatch(DivNumber())}> / </button>
  </div>
   </div>
  )
}

export default App;