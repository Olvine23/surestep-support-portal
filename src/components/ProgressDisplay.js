import React from 'react'

const ProgressDisplay = ({progress}) => {
  return (
    <div className='progress-display'>
        <div className="progress-bar">
            <div className={"progress-indicator"} style={{width: progress + '%'
            }}>

            </div>
            
            </div> 




        {progress}
    </div>
  )
}

export default ProgressDisplay