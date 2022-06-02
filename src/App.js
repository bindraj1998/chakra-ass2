import logo from './logo.svg';
import './App.css';
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';

function App() {
  return (
    <div className="App">

     <div className='in'>
      <h3 className='logo'>Logo</h3>
     <Menu isLazy>
  <MenuButton>Inspiration</MenuButton>
  <MenuList>
    {/* MenuItems are not rendered unless Menu is open */}
    <MenuItem>Explore Design Work</MenuItem>
    <MenuItem>Trending Design to inspire you</MenuItem>
    <MenuItem>New & Noteworthy</MenuItem>
    <MenuItem>Up -and -coming Designers</MenuItem>
  </MenuList>
</Menu> 
<Menu isLazy>
  <MenuButton>Find Work</MenuButton>
  <MenuList>
    {/* MenuItems are not rendered unless Menu is open */}
    <MenuItem>Job Board </MenuItem>
    <MenuItem>Find your dream design job</MenuItem>
    <MenuItem>Freelance Projects</MenuItem>
    <MenuItem>An exclusive list for constract work</MenuItem>
  </MenuList>
</Menu> 

  <Button colorScheme='teal' variant='ghost' >
    Learn  Design
  </Button>

  <Button colorScheme='teal' variant='ghost' size="sm">
    Hire Desiners
  </Button>
     </div>

      <div className='sign'>
      <Button className='signin' colorScheme='teal' variant='ghost' size='xs'>
    Sign In 
  </Button>
  

      <Button className='button' colorScheme='teal' size="sm" variant='solid'>
  Sign Up
  </Button>
      </div>
    </div>
  );
}

export default App;
