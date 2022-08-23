import React, { Fragment } from 'react'

class Glossary extends React.Component {
  render() {
    return (
      <dl>
        {this.props.items.map(item => (
          <Fragment key={item.id}>
            <dt>{item.term}</dt>
            <dd>{item.description}</dd>
          </Fragment>
        ))}
      </dl>
    )
  }
}

export default Glossary
