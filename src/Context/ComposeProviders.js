import _ from 'lodash'
import React from 'react'

const ComposeProviders = props => {
  const { components, children } = props
  return (
    <>
      {_.reduceRight(
        components,
        (memo, Component) => (
          <Component>{memo}</Component>
        ),
        children
      )}
    </>
  )
}
export default ComposeProviders
