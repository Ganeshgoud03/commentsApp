// Write your code here
import './index.css'

const CommentItem = props => {
  const {commentsList, toggleIsLiked, deleteComment} = props
  const {id, name, comment, date, isLiked, initialClassName} = commentsList
  const initial = name.slice(0, 1)

  const likeImg = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const likedText = isLiked ? 'liked-p4' : 'p4'

  const onClickLikeButton = () => {
    toggleIsLiked(id)
  }

  const onClickDeleteComment = () => {
    deleteComment(id)
  }

  return (
    <li className="list-item">
      <div className="comment-container">
        <div className="initial-container">
          <p className={initialClassName}>{initial}</p>
        </div>
        <div className="card-container">
          <div className="name-container">
            <h1 className="head">{name}</h1>
            <p className="p2">{date}</p>
          </div>
          <div>
            <p className="p3">{comment}</p>
          </div>
        </div>
      </div>
      <div className="like-delete-container">
        <div className="like-container">
          <button
            type="button"
            className="like-btn"
            onClick={onClickLikeButton}
          >
            <img src={likeImg} alt="Like" className="like-img" />
          </button>
          <p className={likedText}>Like</p>
        </div>
        <button
          type="button"
          onClick={onClickDeleteComment}
          data-testid="delete"
          className="delete-btn"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="delete-img"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
