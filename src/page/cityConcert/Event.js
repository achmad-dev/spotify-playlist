import { Component } from 'react'
import { DivStyle } from './style';

export class Event extends Component {
    render() {
        return (
            <div className={DivStyle}>
              <li className="event">
                <h3>{this.props.name}</h3>
                <p>{this.props.venue}</p>
                <p>{this.props.date} {this.props.time == null ? '' : this.props.time}</p>
                <p>{this.props.city}</p>
              </li>
            </div>
        )
    }
}

export default Event;