import { Flex, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"


function Navbar(){

return(
    <>
       <Flex justifyContent="space-evenly" bg="coral" position="sticky" top="0px" zIndex="1000" h="80px" w="100%" alignItems="center" >
        <Text as="b" fontSize="xl"><Link to="/">Home</Link></Text>
        <Text as="b" fontSize="xl"><Link to="/alloffer">All Offer</Link></Text>
       </Flex>
    </>
)

}
export {Navbar}