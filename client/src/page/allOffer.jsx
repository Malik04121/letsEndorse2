
import { Box, Flex, Grid, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import axios from "axios"
import { useEffect, useState } from "react";
import image from "../utils/background.png"
import moment from 'moment';
import { baseUrl } from "../config";


function AllOffer(){

const [data,setData]=useState([])
    

      useEffect(()=>{
          axios.get(`${baseUrl}/offer`)
          .then(res=>{
            // let lastObject=res.data[res.data.length-1];
            setData(res.data);
            console.log(res.data)
            // setExpirationDate(lastObject.expirationDate)
          }) 
          .catch(err=>console.log(err))
      },[])
      function formatDate(dateString) {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'long' });
        const year = date.getFullYear();
        return `${day} ${month} ${year}`;
      }

      return (
        <>
          <Grid templateColumns="repeat(2, 1fr)"
      gap={6} p="2%">
            {data.map((ele)=>(
             <Box backgroundImage={`url(${image})`}    backgroundSize="cover">
                 <Box w="45%" ml="52%" pt="3%" pb="3%">
                 <Heading as='h6' size='sm'bg="#e1705d" borderRadius="30px" 
                sx={{
                  boxShadow:
                    "0px 10px 10px -10px rgba(0, 0, 0, 0.5), 0px 10px 20px -10px rgba(0, 0, 0, 0.5)",
                }}
                color="white"  pt="2%" pb="2%">{ele.code}</Heading>
                <Flex alignItems="end"  gap="2%" justifyContent="center" mt="1rem"><Heading as="h5" size="md" fontWeight="bold">GET </Heading><Heading as="h1" size="md" fontSize="25px" color="#e1705d">{ele.discount}</Heading><Heading as="h1" size="md" fontWeight="bold">% OFF</Heading>
                </Flex>
                <Heading mt="1rem" size="sm" fontWeight="normal" as="h4"  >{ele.title}</Heading>
                
                <Heading  as="h4" mt="1rem" size="sm" fontWeight="medium" color="#e37a68">Valid till 
                {` ${moment(ele.expirationDate).format('DD MMMM YYYY')}`}</Heading>
                <Heading size="sm" color="#e9978a" mt="1rem">Anjana Beauty Salon</Heading>
                <Heading size="xs" color="#e9978a" mt="0.5em">23,Sector 3,Rajiv Nagar,Raigad</Heading>
                 </Box>
             </Box>   
            ))}

          </Grid>
           
        </>
      )
    }
    export {AllOffer}