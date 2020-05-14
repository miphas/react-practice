import React from 'react'
import Joke from './joke'

class RandomJoke extends React.Component {
  constructor() {
    super(...arguments)
    this.state = {
      joke: null
    }
  }
  /**
   * 渲染函数
   */
  render() {
    const {joke} = this.state
    return (
      <Joke value={joke} />
    )
  }
  /**
   * 请求笑话信息
   */
  componentDidMount() {
    fetch('https://icanhazdadjoke.com/',
      {headers: {'Accept': 'application/json'}}
    ).then(response => {
      return response.json()
    }).then(json => {
      this.setState({joke: json.joke})
    })
  }
}

export default RandomJoke