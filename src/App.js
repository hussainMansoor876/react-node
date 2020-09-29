import React from 'react';
import './App.css';
import axios from 'axios'
import moment from 'moment'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      epoch: '',
      counter: null,
      currentTime: 0,
      metrics: '',
      timeLoading: true,
      metricsLoading: true
    }
  }

  componentDidMount() {
    this.getTime()
    this.getMetrics()
  }

  epochFormat = (time) => moment(time).format('HH:mm:ss')

  getTime = () => {
    this.setState({ timeLoading: true, metricsLoading: true })
    const { counter } = this.state
    if (typeof (counter) === 'number') {
      clearInterval(counter)
    }
    axios.get('/time', { headers: { mysecrettoken: 'Basic dXNlcjpwYXNzd29yZA==' } })
      .then((res) => {
        const { data } = res
        var currentTime = Date.now() - data.properties.epoch.description - 18000000
        this.setState({ epoch: this.epochFormat(currentTime), currentTime, timeLoading: false }, () => {
          this.startCount()
        })
      })
      .catch(() => {
        this.setState({ timeLoading: false })
      })
  }

  getMetrics = () => {
    axios.get('/metrics', { headers: { mysecrettoken: 'Basic dXNlcjpwYXNzd29yZA==' } })
      .then((res) => {
        const { data } = res
        this.setState({ metrics: data, metricsLoading: false })
      })
      .catch(() => {
        this.setState({ metricsLoading: false })
      })
  }

  startCount = () => {
    var currentTime = this.state.currentTime
    var counter = setInterval(() => {
      this.setState({ epoch: this.epochFormat(currentTime + 1000) })
      currentTime += 1000
    }, 1000)
    this.setState({ counter })
    setTimeout(() => {
      this.getTime()
    }, 30000)
  }

  render() {
    const { epoch, metrics, timeLoading, metricsLoading } = this.state
    return (
      <div>
        {timeLoading && metricsLoading ? <div style={{ position: 'fixed', top: window.innerHeight / 2.5, left: window.innerWidth / 2.08 }}>
          <div className="lds-ellipsis">
            <div>
            </div>
            <div>
            </div>
            <div>
            </div>
            <div>
            </div>
          </div>
        </div> :
          <div className="main-div">
            <div className="left-div">
              {epoch}
            </div>
            <div className="right-div">
              {metrics}
            </div>
          </div>}
      </div>
    );
  }
}

export default App;
