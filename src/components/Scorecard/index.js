import {Component} from 'react'

class Scorecard extends Component {
  render() {
    const {score, onPlayAgain} = this.props
    return (
      <div className="scorecard">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
          alt="trophy"
        />
        <p>Your Score</p>
        <h2>{score}</h2>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png "
            alt="reset"
            className="reset-image"
          />
          <button
            type="button"
            onClick={onPlayAgain}
            className="play-again-btn"
          >
            PLAY AGAIN
          </button>
        </div>
      </div>
    )
  }
}

export default Scorecard
