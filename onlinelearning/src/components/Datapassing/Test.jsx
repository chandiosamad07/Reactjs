import React from 'react'
import Sidebar from './Sidebar'
import Body from './Body'

const Test = () => {
 const [selectedOption, setSelectedOption] = useState('default');
 const handleSidebarClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <Sidebar onSidebarClick={handleSidebarClick} />
      <Body selectedOption={selectedOption} />
    </div>
  )
}

export default Test