import { Component } from 'react'

export class Event extends Component {
    render() {
        return (
            <div>
              <li className="event">
                <h2>{this.props.name}</h2>
                <p>{this.props.venue}</p>
                <p>{this.props.date} {this.props.time == null ? '' : this.props.time}</p>
                <p><b>{this.props.city}</b></p>
              </li>
            </div>
        )
    }
}

export default Event;