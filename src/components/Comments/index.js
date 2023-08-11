import {Component} from 'react'
import {v4} from 'uuid'
import {formatDistanceToNow} from 'date-fns'

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
const initialCommentsList = []

class Comments extends Component {
  state = {
    commentsList: initialCommentsList,
    nameInput: '',
    commentInput: '',
    count: 0,
  }

  onAddComment = event => {
    event.preventDefault()

    const {nameInput, commentInput} = this.state
    const initialContainerBackgroundClassName = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`

    const newComment = {
      id: v4(),
      name: nameInput,
      comment: commentInput,
      date: formatDistanceToNow(new Date()),
      isLiked: false,
      initialClassName: initialContainerBackgroundClassName,
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      nameInput: '',
      commentInput: '',
      count: prevState.count + 1,
    }))
  }

  changeName = event => {
    this.setState({nameInput: event.target.value})
  }

  changeComment = event => {
    this.setState({commentInput: event.target.value})
  }

  toggleIsLiked = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  deleteComment = id => {
    const {commentsList, count} = this.state
    const filteredCommentsList = commentsList.filter(
      eachComment => eachComment.id !== id,
    )
    this.setState({commentsList: filteredCommentsList, count: count - 1})
  }

  render() {
    const {nameInput, commentInput, commentsList, count} = this.state

    return (
      <div className="bg-container">
        <div className="top-container">
          <h1 className="heading">Comments</h1>
          <div className="container">
            <div className="input-container">
              <p className="para">Say something about 4.0 Technologies</p>
              <form onSubmit={this.onAddComment} className="form-container">
                <input
                  value={nameInput}
                  onChange={this.changeName}
                  placeholder="Your Name"
                  className="name-input"
                />
                <textarea
                  onChange={this.changeComment}
                  placeholder="Your Comment"
                  cols="40"
                  rows="5"
                  className="comment-input"
                  value={commentInput}
                >
                  {commentInput}
                </textarea>
                <button type="submit" className="btn">
                  Add Comment
                </button>
              </form>
            </div>
            <div className="image-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
                alt="comments"
                className="comment-img"
              />
            </div>
          </div>
          <div className="bottom-container">
            <p className="para">
              <span className="span">{count}</span> Comments
            </p>
            <ul className="list-container">
              {commentsList.map(eachComment => (
                <CommentItem
                  key={eachComment.id}
                  commentsList={eachComment}
                  toggleIsLiked={this.toggleIsLiked}
                  deleteComment={this.deleteComment}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Comments
