import React from 'react'

import * as assets from './assets'


const checkedStyle = {}

const uncheckedStyle = {
  WebkitFilter: 'grayscale(100%)',
  MozFilter: 'grayscale(100%)',
  msFilte: 'grayscale(100%)',
  OFilter: 'grayscale(100%)',
  filter: 'grayscale(100%)',
}


const Chitemmu = (props) => {
  const levels = []
  const level = Math.max(0, props.level)

  for (let i = 1; i < 6; i++) {
    const checked = i <= level

    levels.push(
      <img
        key={i}
        style={checked ? checkedStyle : uncheckedStyle}
        className={`chitemmu-level ${checked ? "checked" : "unchecked"}`}
        src={assets.olly}
      />
    )
  }

  return (
    <div className="chitemmu">{levels}</div>
  )
}


Chitemmu.prototype.propTypes = {
  level: React.PropTypes.number
}


export default Chitemmu
