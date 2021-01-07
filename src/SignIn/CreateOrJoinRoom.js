import React, { useState } from 'react';
import { Input, Button, Divider, Row } from 'antd';
import { useDispatch } from 'react-redux'
import { createRoom, checkRoom } from '../utils';
import { lightWhite, inputStyle, btnStyle } from './index'

const CreateOrJoinRoom = () => {
  const [ roomName, setRoomName ] = useState();
  const [ roomId, setRoomId ] = useState();
  const dispatch = useDispatch();

  const createNewRoom = () => {
    dispatch( createRoom( roomName ) )
  }

  const checkRoomId = () => {
    dispatch( checkRoom( roomId ) )
  }

  return (
    <>
      <Row>
        <Input
          size="large"
          maxLength={20}
          placeholder="Enter a short name for your group"
          onChange={( e ) => setRoomName( e.target.value )}
          onPressEnter={() => createNewRoom()}
          style={inputStyle}
        />
        <Button type='primary' onClick={() => createNewRoom()} style={btnStyle}>
          Create new room
        </Button>
      </Row>
      <Divider style={{ background: lightWhite }} />
      <Row>
        <Input
          size="large"
          placeholder="Enter room ID"
          onChange={( e ) => setRoomId( e.target.value )}
          onPressEnter={() => checkRoomId()}
          style={inputStyle}
        />
        <Button type='primary' onClick={() => checkRoomId()} style={btnStyle}>
          Join room
        </Button>
      </Row>
    </>
  )
}

export default CreateOrJoinRoom