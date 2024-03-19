import React from 'react'

const Sidebar = ({onSidebarClick}) => {
  return (
    <>
    <button onClick={(onSidebarClick('option 1'))}>Option 1</button>
    <button onClick={(onSidebarClick('option 2'))}>Option 2</button>

    </>
    )
}

export default Sidebar