import React, { Component } from 'react'
import TeamLogo from './TeamLogo'
import { Link } from 'react-router-dom'
import { getTeamNames } from '../api'
export default class Home extends Component {
  state = {
    teamNames: []
  }
  componentDidMount() {
    getTeamNames().then(teamNames =>
      this.setState(() => ({
        teamNames
      }))
    )
  }
  render() {
    let teamNames = this.state.teamNames
    return (
      <div className="container">
        <h1 className="large-header">Animal Basket Ball League</h1>
        <h3 className="header text-center">Select a team</h3>
        <div className="home-grid">
          {teamNames.map(id => (
            <Link key={id} to={`/${id}`} title={`${id} logo`}>
              <TeamLogo id={id} width="125px" />
            </Link>
          ))}
        </div>
      </div>
    )
  }
}