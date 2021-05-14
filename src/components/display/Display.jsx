import React from 'react'
import PropTypes from 'prop-types'

function Display({display}) {
   return (
      <pre
         style={{
            height: '600px',
            width: '600px',
            border: 'grey solid 2px',
            overflowY: 'scroll',
            wordWrap: 'normal'
      }}
      >
         <code>
            <p>
               {display}
            </p>
         </code>
      </pre>
   )
}

Display.propTypes = {
display: PropTypes.any.isRequired
}

export default Display

