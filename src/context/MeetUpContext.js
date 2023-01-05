import React from 'react'

const MeetUpContext = React.createContext({
  onChangeUserName: () => {},
  onChangeTopicId: () => {},
  isRegistered: '',
  onSubmit: () => {},
})

export default MeetUpContext
