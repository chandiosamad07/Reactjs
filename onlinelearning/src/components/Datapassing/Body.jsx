import React from 'react'

const Body = ({SelectedOption}) => {
  return (
    <div>
        {SelectedOption ==='option1'&&<div>Option 1 Content</div>}
        {SelectedOption ==='option2'&&<div>Option 2 Content</div>}
        {SelectedOption ==='default'&&<div>Default Content</div>}

    </div>
  )
}

export default Body