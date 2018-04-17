import React, { Component } from 'react';
import logo from './logo.png';
import './CountdownClock.css';

export class CountdownClock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            days: null,
            hours: null,
            minutes: null,
            seconds: null,
        }
        this.deadlineTime = 0;
    }
    
    componentWillMount() {
        this.deadlineTime = new Date(this.props.deadlineTime).getTime();
        this.handleCountdown();
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.handleCountdown(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        return (
            <div className = "App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </header>
                <section className = "main">
                    
                    <div className = "clock">{this.state.days}<span className = "clock-label">days</span>  {this.state.hours}<span className = "clock-label">hrs</span>  {this.state.minutes}<span className = "clock-label">mins</span>  {this.state.seconds}<span className = "clock-label">secs</span></div>
                    <p className = "notification">Coming soon...</p>
                </section>
            </div>
        );
    }

    handleCountdown() {
        let currentTime = new Date().getTime();
        let distance = this.deadlineTime - currentTime;
        this.setState({
            days: Math.floor(distance / (1000 * 60 * 60 * 24)),
            hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
    }
}