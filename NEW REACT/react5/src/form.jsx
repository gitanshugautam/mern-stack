import React from 'react'
import { useState } from 'react'
const form = () => {
  return (
    <div>
        <form onSubmit={handleSubmit}>
      <lable htmlFor='name'> name </lable>
      <input id='name' type='text' name='name' placeholder='enter ypur name'onChange={handlechange}></input><br></br>
      <lable htmlFor='email'> name </lable>
      <input id='name' type='text' name='email' placeholder='enter ypur email'onChange={handlechange}></input><br></br>
      <lable htmlFor='password'> name </lable>
      <input id='name' type='text' name='password' placeholder='enter ypur password'onChange={handlechange}></input><br></br>
      <lable htmlFor='name'> name </lable>
      <input id='password' type='text' name='password' placeholder='enter ypur name'onChange={handlechange}></input><br></br>
      </form>
    </div>
  )
}

export default form;
