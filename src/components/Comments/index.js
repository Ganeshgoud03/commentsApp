import {Component} from 'react'
import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {
    name: '',
    comment: '',
  }

  changeName = event => {
    this.setState({name: event.target.value})
  }

  changeComment = event => {
    this.setState({comment: event.target.value})
  }

  render() {
    const {name, comment} = this.state
    return (
      <div>
        <div>
          <div>
            <h1>Comments</h1>
            <p>Say something about 4.0 Technologies</p>
            <form onSubmit={this.handleSubmit}>
              <input value={name} onChange={this.changeName} />
              <input value={comment} onChange={this.changeComment} />
              <button type="submit">Add Comment</button>
            </form>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
            />
          </div>
        </div>
        <div>
          <p>Comments</p>
          <CommentItem className={initialContainerBackgroundClassNames} />
        </div>
      </div>
    )
  }
}

export default Comments
