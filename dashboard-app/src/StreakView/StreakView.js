import React, { Component } from 'react';
import './streakView.css';
import diagonalBG from './diagonal-bg.svg';
import winkyFace from './winkyFace.svg';

class StreakView extends Component {
  render() {
    return (
      <div className={"streak-view-container"+(this.props.enabled? "": " disabled")}>
        <div className={"streak-modal card"+(this.props.enabled? "": " disabled")}>
          
          <img className="face" src={winkyFace} />
          <div className="text">Bra jobbat, du har nu 7 dagars streak!</div>
          <img className="diagonal-bg" src={diagonalBG} />
        </div>
      </div>
    );
  }
}

export default StreakView;
