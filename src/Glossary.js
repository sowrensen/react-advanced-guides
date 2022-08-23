import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

class Glossary extends React.Component {
  render() {
    return (
      <div>
        <dl>
          {this.props.items.map(item => (
            <Fragment key={item.id}>
              <dt>{item.term}</dt>
              <dd>{item.description}</dd>
            </Fragment>
          ))}
        </dl>
        <Link to="/accounting">Go to accounting</Link>
      </div>
    )
  }
}

export default Glossary
