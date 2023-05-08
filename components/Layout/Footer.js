import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box pt={4} align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Tomas Macia. All Rights Reserved.
    </Box>
  )
}

export default Footer