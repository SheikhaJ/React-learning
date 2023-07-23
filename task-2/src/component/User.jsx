import React from 'react';

export default function User(props) {

  return (
    <>
    <div className='card col-md-3'>
    <div className='card-body'>
        <h3 className='title.card'>{props.title}</h3>
        <p className='card-text'>{props.desc}</p>
    </div>
</div>

    </>
  )
}
