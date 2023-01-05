import {Switch, Route} from 'react-router-dom'
import {Component} from 'react'
import Home from './components/Home'
import MeetUpContext from './context/MeetUpContext'
import Register from './components/Register'
import NotFound from './components/NotFound'

import './App.css'

// These are the lists used in the application. You can move them to any component needed.

// Replace your code here
class App extends Component {
  state = {
    isRegistered: false,
    userName: '',
    selectTopicId: '',
  }

  onSubmitForm = () => {
    this.setState(prevState => ({
      isRegistered: !prevState.isRegistered,
      userName: '',
    }))
  }

  changeUserName = name => {
    this.setState({userName: name})
  }

  changeTopicId = topic => {
    this.setState({selectTopicId: topic})
  }

  render() {
    const {isRegistered, userName} = this.state
    return (
      <>
        <MeetUpContext.Provider
          value={{
            onChangeUserName: this.changeUserName,
            onChangeTopicId: this.changeTopicId,
            isRegistered,
            onSubmit: this.onSubmitForm,
          }}
        >
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/register" component={Register} />
            <Route component={NotFound} />
          </Switch>
        </MeetUpContext.Provider>
      </>
    )
  }
}
export default App
