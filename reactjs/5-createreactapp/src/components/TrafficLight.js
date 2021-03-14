// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
import "../css/TrafficLight.css";
import classNames  from 'classnames';;

const RED = 0;
const ORANGE = 1;
const GREEN = 2;

class TracfficLight extends Component {

        render() {
            const {currentCoLor} = this.props;
            console.log('Rendering.... '+currentCoLor);
            console.log("Rendering.... " + this.props.currentCoLor);
            return (
              <div className="TrafficLight">
                <div
                  className={classNames("bulb", "red", {
                    active: currentCoLor === RED,
                  })}
                />
                <div
                  className={classNames("bulb", "green", {
                    active: currentCoLor === GREEN,
                  })}
                />
                <div
                  className={classNames("bulb", "orange", {
                    active: currentCoLor === ORANGE,
                  })}
                />
              </div>
            );     
        };
    }
export default TracfficLight;
