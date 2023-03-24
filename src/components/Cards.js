import React from 'react'

function Cards(props) {
  console.log(props)
  return (
    <div>
      <img src={"../{data.props.image}"} />
      <div>
        <img src="../images/star.png" className="card--star" />
        <div>
        <span>{props.data.location}</span>
        <span>{props.data.googleMapUrl}</span>
        </div>
        <h1>{props.data.title}</h1>
        <h4>{props.data.startDate} - {props.data.endDate}</h4>
        <p>{props.data.description}</p>
      </div>
    </div>
  )
}

export default Cards