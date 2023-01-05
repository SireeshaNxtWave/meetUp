import {Component} from 'react'
import Header from '../Header'
import MeetUpContext from '../../context/MeetUpContext'
import {
  BgContainer,
  RegisterImage,
  FormPage,
  Heading,
  Label,
  Input,
  Select,
  Button,
} from './styledComponents'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class Register extends Component {
  render() {
    return (
      <>
        <Header />
        <MeetUpContext.Consumer>
          {value => {
            const {
              userName,
              onSubmit,
              onChangeUserName,
              onChangeTopicId,
            } = value
            const changeName = event => {
              onChangeUserName(event.target.value)
            }
            const changeTopic = event => {
              onChangeTopicId(event.target.value)
            }
            const submitForm = event => {
              event.preventDefault()
              onSubmit()
            }
            return (
              <BgContainer>
                <RegisterImage
                  atl="website register"
                  src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                />
                <FormPage onSubmit={submitForm}>
                  <Heading>Let us join</Heading>
                  <Label htmlFor="input">NAME</Label>
                  <Input
                    id="input"
                    placeholder="Your name"
                    type="text"
                    value={userName}
                    onChange={changeName}
                  />
                  <Label htmlFor="topic">TOPICS</Label>
                  <Select id="topic" onChange={changeTopic}>
                    {topicsList.map(each => (
                      <option value={each.id} key={each.id}>
                        {each.displayText}
                      </option>
                    ))}
                  </Select>
                  <Button type="submit">Register Now</Button>
                </FormPage>
              </BgContainer>
            )
          }}
        </MeetUpContext.Consumer>
      </>
    )
  }
}
export default Register
