import React, { Fragment } from 'react'

function Glossary(props) {
  return (
    <dl>
      {props.items.map(item => (
        <Fragment key={item.id}>
          <dt>{item.term}</dt>
          <dd>{item.description}</dd>
        </Fragment>
      ))}
    </dl>
  )
}

export default Glossary
