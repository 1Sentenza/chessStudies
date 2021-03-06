import React from 'react';
import './info.styles.css';
import Turns from '../turns/turns.component';
import Resume from '../resume/resume.component';
import MovesCommands from '../movesCommands/movesCommands.component';
import GameList from '../gameList/gameList.component';
import GameMenu from '../gameMenu/gameMenu.component';

const Info = (props) => {
  let status = props.game.status;
  let pgn = props.game.pgnHistory;
  let statuses = props.statuses;
  if(status === statuses.showInput){
      return(
        <React.Fragment>
        <GameMenu menuMove = {props.menuMove} movesLoaded={props.game.pgnHistory && props.game.pgnHistory > 1}/>
        <div className='info-zone'>
          <h3 className='board-title'>{props.game.infosTitle}</h3>
          <textarea id="game-input" className="game-input" name="pgn"></textarea>
          <button onClick={props.savePGN}>Go</button>
        </div>
        </React.Fragment>
      )
  }
  else if (status === statuses.showList) { // todo : showList
    return(
      <React.Fragment>
      <GameMenu menuMove = {props.menuMove} movesLoaded={props.game.pgnHistory && props.game.pgnHistory.length > 1 ? true:false}/>
      <div className='list-zone'>
        <h3 className='board-list-title'>{props.game.infosTitle}</h3>
        <GameList games={props.game.games} deleteGame={props.deleteGame} loadGame={props.loadGame}></GameList>
      </div>
      </React.Fragment>
    )
  }
  else if (status === statuses.showMessage || status === statuses.inError|| status === statuses.init) { 
    return(
      <div className='info-zone'>
        <h3 className='board-title'>{props.game.infosTitle}</h3>
        <p className='infosMessage'>{props.game.infosMessage}</p>
      </div>
    )
  }
 else if (status === statuses.showMoves) { // add proposeSave : tue|false (button to save loaded game to locaStorage or back in the future (or both))
      return(
        <React.Fragment>
        <GameMenu menuMove = {props.menuMove} movesLoaded={props.game.pgnHistory && props.game.pgnHistory > 1}/>
        <div className='turns-zone'>
          <Resume resume = {props.game.pgnResume}/>
          <Turns turnsList = {props.game.pgnGame} currentMove={props.game.move} movePGN = {props.movePGN}/>
          <MovesCommands movePGN = {props.movePGN}/> 
        </div>
        </React.Fragment>
      )
    } else{
      return(
        <div className='info-zone'>
          <h3 className='board-title'>404</h3>
          <p className='infosMessage'>Sorry Buddy, I'm afraid we are lost !</p>
        </div>
      ) 
    }
  }

  export default Info;