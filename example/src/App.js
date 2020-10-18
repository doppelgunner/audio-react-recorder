import React from 'react'

import AudioReactRecorder, { RecordState } from 'audio-react-recorder'
import 'audio-react-recorder/dist/index.css'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      recordState: null,
      audioData: null
    }
  }

  start = () => {
    this.setState({
      recordState: RecordState.START
    })
  }

  pause = () => {
    this.setState({
      recordState: RecordState.PAUSE
    })
  }

  stop = () => {
    this.setState({
      recordState: RecordState.STOP
    })
  }

  onStop = (data) => {
    this.setState({
      audioData: data
    })
    console.log('onStop: audio data', data)
  }

  render() {
    const { recordState } = this.state

    return (
      <div>
        <AudioReactRecorder
          state={recordState}
          onStop={this.onStop}
          backgroundColor='rgb(255,255,255)'
        />
        <audio
          id='audio'
          controls
          src={this.state.audioData ? this.state.audioData.url : null}
        ></audio>
        <button id='record' onClick={this.start}>
          Start
        </button>
        <button id='pause' onClick={this.pause}>
          Pause
        </button>
        <button id='stop' onClick={this.stop}>
          Stop
        </button>
      </div>
    )
  }
}

export default App
