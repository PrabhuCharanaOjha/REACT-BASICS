import React from 'react'

const AboutPage = (props) => {
  return (
    <div>About Page's Dynamic data = {props.match.params.dynamicData}</div>
  )
}

export default AboutPage