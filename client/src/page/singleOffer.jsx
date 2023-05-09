import { Box, Flex, Heading, Text } from "@chakra-ui/react"
import image from "../utils/background.png"
import { useEffect, useState } from "react"
import axios from "axios"
import { baseUrl } from "../config"

function SingleOffer(){
    const [data,setData]=useState({})
    const [expirationdate,setExpirationDate]=useState("")
    const date = new Date(expirationdate);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();

      useEffect(()=>{
          axios.get(`${baseUrl}/offer`)
          .then(res=>{
            let lastObject=res.data[res.data.length-1];
            setData(lastObject);
            setExpirationDate(lastObject.expirationDate)
          }) 
          .catch(err=>console.log(err))
      },[])

    return(
        <>
          <Box backgroundImage={`url(${image})`} w="100%"
      h="100vh" backgroundSize="cover"  >
            <Box w="48%" ml="50%" h="100%"  pt="4%" position="absolute">
                <Heading as='h1' size='4xl'bg="#e1705d" borderRadius="60px" 
                sx={{
                  boxShadow:
                    "0px 10px 10px -10px rgba(0, 0, 0, 0.5), 0px 10px 20px -10px rgba(0, 0, 0, 0.5)",
                }}
                color="white"  pt="2%" pb="2%">{data.code}</Heading>
                <Flex alignItems="end"  gap="2%" justifyContent="center" mt="2rem"><Heading as="h1" size="3xl" fontWeight="bold">GET </Heading><Heading as="h1" size="4xl" fontSize="130px" color="#e1705d">{data.discount}</Heading><Heading as="h1" size="3xl" fontWeight="bold">% OFF</Heading>
                </Flex>
                <Heading mt="2rem" fontSize="3rem" fontWeight="medium" as="h4"  >{data.title}</Heading>
                
                <Heading  as="h4" mt="2.5rem" size="xl" fontWeight="medium" color="#e37a68">Valid till 
                {` ${day} ${month} ${year}`} </Heading>
                <Heading fontSize="1.5rem" color="#e9978a" mt="2.5rem" fontWeight="medium">Anjana Beauty Salon</Heading>
                <Heading fontSize="1.5rem" color="#e9978a" mt="0.5em" fontWeight="medium">23,Sector 3,Rajiv Nagar,Raigad</Heading>
            </Box>
          </Box>
        </>
    )
}
export {SingleOffer}