import React from 'react'
import {useSelector , useDispatch} from "react-redux"
import { INCREMENY, DECREMENT, incNumber,decNumber} from './Actions/index'

function REdux() {

  const mystate=useSelector((state)=>state.changetheNumber)
  const dispatch=useDispatch( )
  return (
    <>
    <button onClick={()=>dispatch(incNumber())}>inc</button>
    <input type="name" value={mystate}></input>
    <button onClick={()=>dispatch(decNumber())}>dec</button>
    </>
  )
}

export default REdux