import React, { Component } from 'react'
import coffee from '../images/coffee.svg'
import tania from '../../content/images/tania2019.png'

class UserInfo extends Component {
  render() {
    return (
      <aside className="note">
        <div className="container note-container">
          <div>
            <h2>A note from the author</h2>
            <p>
              Hi! I'm Tania. I write free, quality content that helps thousands of people daily. I turn down
              everyone who offers to put ads, affiliate links, and sponsored posts on my website.
            </p>
            <p>
              <strong>If you enjoy my content, please consider supporting what I do!</strong>
            </p>

            <a href="https://ko-fi.com/taniarascia" className="donate-button" target="_blank">
              Support me with a coffee <img src={coffee} className="coffee-icon" />
            </a>
            <a
              className="patreon-button"
              href="https://www.patreon.com/taniarascia"
              target="_blank"
            >
              Patreon
            </a>
          </div>
          <div>
            <img className="avatar" src={tania} />
          </div>
        </div>
      </aside>
    )
  }
}

export default UserInfo
