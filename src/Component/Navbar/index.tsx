import { Flex, Icon, useColorModeValue } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import { MdLibraryMusic } from 'react-icons/md'
import { HiSparkles } from 'react-icons/hi'
import { IconType } from 'react-icons'
import { Button } from '@mui/material'

const Navbar = () => {
  return (
    <Flex as="nav">
      <NavBarItem to="/create-playlist" icon={MdLibraryMusic}>
        <Button>Create Playlist</Button>
      </NavBarItem>
      <NavBarItem to="/search-concert" icon={HiSparkles}>
        <Button>Search Concert</Button>
      </NavBarItem>
    </Flex>
  )
}

const NavBarItem = ({ icon, children, to }: {
  icon: IconType,
  children: React.ReactNode,
  to: string
}) => {
  const bg = useColorModeValue('white', 'white')
  return (
    <Flex
      alignItems="center"
      borderRadius="lg"
      as={NavLink}
      exact
      activeStyle={{ background: bg }}
      to={to}
    >
      <Icon as={icon} mr={4} /> {children}
    </Flex>
  )
}

export default Navbar;