import {Component} from 'react'
import {Link} from 'react-router-dom'
import Header from '../Header'
import {
  HomeBgContainer,
  MainHeading,
  Description,
  Button,
  Heading,
  Para,
} from './styledComponents'
import MeetUpContext from '../../context/MeetUpContext'

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

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <MeetUpContext.Consumer>
          {value => {
            const {isRegistered, userName, selectTopicId, topicList} = value
            const selectedTopic = topicList.filter(
              each => each.id === selectTopicId,
            )
            console.log(selectedTopic)
            return (
              <HomeBgContainer>
                {isRegistered ? (
                  <div>
                    <Heading>Hello {userName}</Heading>
                    <Para>Welcome to {selectedTopic}</Para>
                  </div>
                ) : (
                  <div>
                    <MainHeading>Welcome to Meetup</MainHeading>
                    <Description>Please register for the topic</Description>
                    <Link to="/">
                      <Button>Register</Button>
                    </Link>
                  </div>
                )}
                <img
                  alt="meetup"
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                />
              </HomeBgContainer>
            )
          }}
        </MeetUpContext.Consumer>
      </>
    )
  }
}
export default Home
