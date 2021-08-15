import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <a href="https://coreui.io" target="_blank" rel="noopener noreferrer">LiquidWell</a>
        <span className="ml-1">&copy; 2021.</span>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">Designed by</span>
        <a href="https://lybtechnology.com/" target="_blank" rel="noopener noreferrer">LYBTechnology</a>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
