import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, InputGroup, InputLeftAddon, InputRightAddon, Select, Text, VStack } from "@chakra-ui/react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { baseUrl } from "../config"

const formDataObj={
    code:"",
    title:"",
    description:"",
    type:"",
    discount:"",
    applicable:"",
    minOrderValue:"",
    maxDiscount:"",
    startDate:"",
    expirationDate:"",
    numberOfCustomer:"",
    totalCustomers:"",
    offersPerCustomer:"",
    usagePerCustomer:""
}
function Home(){
   const [formData,setFormData]=useState(formDataObj)
   const navigate=useNavigate()

   const  handleInput=(e)=>{
    const {name,value}=e.target
     setFormData({...formData,[name]:value})
   }
  
    const SubmitForm=(e)=>{
         e.preventDefault()
         axios.post(`${baseUrl}/offer/createOffer`,formData)
         .then(res=>console.log(res.data))
         .catch(err=>console.log(err))
         navigate("/singleOffer")
    }

  return(
    <>
       <Heading as="h5">Create Offer</Heading>
       
       <form onSubmit={SubmitForm}>
       <VStack spacing={4} p="30px">
        <FormControl isRequired>
            <Flex alignItems="center">
          <FormLabel w="13%">Offer Code</FormLabel>
          <Input
            type="text"
            name="code"
            value={formData.code}
            onChange={handleInput}
            w="30%"
            maxLength={8}
          />
            </Flex>
        </FormControl>
        <FormControl isRequired>
            <Flex alignItems="center">
          <FormLabel w="13%">Offer Title</FormLabel>
          <Input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInput}
            w="30%"
            maxLength={60}
          />
            </Flex>
        </FormControl>
        <FormControl >
            <Flex  alignItems="center">
          <FormLabel w="13%">Offer Description</FormLabel>
          <Input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleInput}
            w="60%"
            maxLength={140}
          />
            </Flex>
        </FormControl>
        <FormControl isRequired>
            <Flex alignItems="center">
          <FormLabel w="13%">Offer Type</FormLabel>
          <Select onChange={handleInput} name="type" w="20%">
            <option value="Percentage discount">Percentage discount</option>
            <option value="Flat discount">Flat discount</option>
            <option value="Free Gift">Free Gift</option>
          </Select>
            </Flex>
        </FormControl>
        {formData.type=="Percentage discount"|| formData.type === ""?<FormControl  isRequired>
            <Flex alignItems="center">
          <FormLabel w="13%">Discount %</FormLabel>
          <InputGroup w="20%">
              <Input 
               type="number"
               min={0}
               name="discount"
               value={formData.discount}
               onChange={handleInput} />
              <InputRightAddon children='%' />
             </InputGroup>
            </Flex>
        </FormControl>:null}
        <FormControl isRequired>
            <Flex alignItems="center">
          <FormLabel w="13%">Applicable on</FormLabel>
          <Select onChange={handleInput} name="applicable" w="20%">
            <option value="All orders">All orders</option>
            <option value="Orders above certain amount">Orders above certain amount</option>
            <option value="Select services">Select services</option>
          </Select>
            </Flex>
        </FormControl>
        <FormControl isRequired>
            <Flex alignItems="center">
          <FormLabel w="13%">Minimum order value</FormLabel>
          <InputGroup w="20%">
           <InputLeftAddon children='₹' />
           <Input
            type="number"
            name="minOrderValue"
            value={formData.minOrderValue}
            onChange={handleInput}
            w="40%"
            minLength={0}
          />
             </InputGroup>
            </Flex>
        </FormControl>
        {formData.type=="Percentage discount"|| formData.type === ""? 
        <FormControl isRequired>
            <Flex alignItems="center">
          <FormLabel w="13%">Maximum discount</FormLabel>
          <InputGroup w="20%">
           <InputLeftAddon children='₹' />
           <Input
            type="number"
            name="maxDiscount"
            value={formData.maxDiscount}
            onChange={handleInput}
            w="40%"
            minLength={0}
          />
             </InputGroup>
            </Flex>
        </FormControl>:null}
        <Flex w="100%">
        <FormControl isRequired>
            <Flex alignItems="center">
          <FormLabel w="25%">Start Date</FormLabel>
          <Input
            type="date"
            name="startDate"
            value={formData.startDate}
            // onChange={handleInputDate}
            onChange={handleInput}
            w="40%"
          />
            </Flex>
        </FormControl>
        <FormControl isRequired>
            <Flex alignItems="center">
          <FormLabel w="25%">Expiration Date</FormLabel>
          <Input
            type="date"
            name="expirationDate"
            value={formData.expirationDate}
            onChange={handleInput}

            // onChange={handleInputDate}
            w="30%"
          />
            </Flex>
        </FormControl>
        </Flex>
        <Flex w="100%">
        <FormControl isRequired  w="50%">
            <Flex alignItems="center" >
          <FormLabel  >Number of customer</FormLabel>
          <Flex  >
            <Box border="1px solid black" pl="6%" pr="6%" bg="silver" name="numberOfCustomer"  onClick={()=>setFormData({ ...formData,numberOfCustomer:"Limited" })}>Limited</Box>
            <Box border="1px solid black"  pl="6%"pr="6%" name="numberOfCustomer" onClick={()=>setFormData({ ...formData,numberOfCustomer:"Unlimited" })}>Unlimited</Box>
          </Flex>
            </Flex>
        </FormControl>
        {formData.numberOfCustomer=="Limited" || formData.numberOfCustomer === ""?

        <FormControl  w="50%">
            <Flex alignItems="center">
          <FormLabel w="25%">Total customers</FormLabel>
          <Input
            type="text"
            name="totalCustomers"
            value={formData.totalCustomers}
            onChange={handleInput}
            w="40%"
          />
            </Flex>
        </FormControl>
        :null}
        </Flex>
        <Flex w="100%">
        <FormControl isRequired w="50%">
            <Flex alignItems="center">
          <FormLabel >offer use per customer</FormLabel>
          <Flex  >
            <Box border="1px solid black" pl="6%"pr="6%" name="offersPerCustomer" bg="silver" onClick={()=>setFormData({ ...formData,offersPerCustomer:"Limited" })}>Limited</Box>
            <Box border="1px solid black"  pl="6%"pr="6%" name="offersPerCustomer" onClick={()=>setFormData({ ...formData,offersPerCustomer:"Unlimited" })}>Unlimited</Box>
          </Flex>
          
            </Flex>
        </FormControl>
        {formData.offersPerCustomer=="Limited"|| formData.offersPerCustomer === ""?
        <FormControl w="50%">
            <Flex alignItems="center" >
          <FormLabel w="25%">usage per customers</FormLabel>
          <Input
            type="text"
            name="usagePerCustomer"
            value={formData.usagePerCustomer}
            onChange={handleInput}
            w="40%"
          />
            </Flex>
        </FormControl>
        :null}
        </Flex>

        <Button type="submit" colorScheme="orange" mt={4}>
          CREATE OFFER
        </Button>
        </VStack>
       </form>
    </>
  )

}
export {Home}