import React from 'react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'
import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, Divider } from '@chakra-ui/react'

function Blogspage() {
    return (
        <div>
            <div style={{ display: "flex", justifyContent: "flex-end", padding: "20px", gap: "20px" }} >

                <Button colorScheme='blue'>CREATE BLOG</Button>
                <Button colorScheme='red'>RESET</Button>

            </div>

            <div style={{ display: "flex", justifyContent: "space-around", padding: "20px" }} >

                <Input width="500px" variant='filled' placeholder='Serach for blogs' />

                <Select width="400px" variant='filled' placeholder='Filter By Category' >
                    <option width="300px" value='option1'>Business</option>
                    <option width="300px"
                        value='option2'>Tech</option>
                    <option width="300px" value='option3'>Lifestyle</option>
                    <option width="300px" value='option3'>Entertainment</option>
                </Select>


                <Select width="300px" variant='filled' placeholder='Sort By Data' >
                    <option width="300px" value='option1'>Ascending</option>
                    <option width="300px" value='option2'>Descending</option>

                </Select>

            </div>


            {/* // card */}

            <div style={{ padding: "100px", alignItems: "center", }} >
                <Card maxW='sm'>
                    <CardBody>
                        <div style={{ display: "flex", justifyContent: "flex-end", padding: "2px", gap: "20px" }} >

                            <Button height="25px" colorScheme='orange'> Edit</Button>
                            <Button height="25px" colorScheme='red'>Delete</Button>
                        </div>
                        <div style={{ display: 'flex', justifyContent: "flex-start", gap: "10px" }} >
                            <div>
                                <Image width="70px" height="70px"
                                    src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                                    alt='Green double couch with wooden legs'
                                    borderRadius='lg'
                                />
                            </div>
                            <div style={{ padding: "5px" }}>
                                <h4>Name: Danial dubey</h4>
                                <p>Date: 24-08-2023</p>
                            </div>
                        </div>


                        <Stack mt='6' spacing='3'>
                            <Heading  size='md'>Be Present</Heading>
                            <Text>
                                This sofa is perfect for modern tropical spaces, baroque inspired
                                spaces, earthy toned spaces and for people who love a chic design with a
                                sprinkle of vintage design.
                            </Text>
                            <Text color='blue.600' fontSize='2xl'>
                                
                            </Text>
                        </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                        <ButtonGroup spacing='2'>
                            <Button variant='solid' colorScheme='blue'>
                                Add Comment
                            </Button>
                            <Button variant='ghost' colorScheme='blue'>
                                Add Comment
                            </Button>
                        </ButtonGroup>
                    </CardFooter>
                </Card>
            </div>

        </div>
    )
}

export default Blogspage