import { Button, Container, Box, Heading, Image, useColorModeValue, SimpleGrid, ListItem, List, Link} from '@chakra-ui/react'
// removed icon from above import
import NextLink from 'next/link'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
//import { GridItem } from '../components/grid-item'
import { FaGithub, FaLinkedin } from "react-icons/fa"

const Page = () => {
    return (
        <Layout>
            <Container>
                <Box borderRadius="lg" bg={useColorModeValue('lightgray', 'whiteAlpha.200')} p={3} mb={6} align="center">
                Hey there! Welcome to my website.
                </Box>

                <Box display={{md:'flex'}}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Tai Bui
                        </Heading>
                        <p>(Student | Developer)</p>
                    </Box>
                    <Box flexShrink={0} mt={{base: 4, md: 0}} ml={{md: 6}} align="center">
                        <Image borderColor="whiteAlpha.800" 
                        borderWidth={2} 
                        borderStyle="solid" 
                        maxWidth="100px" 
                        display="inline-block" 
                        borderRadius="full" 
                        src ="/images/tai.png"
                        alt="Profile Image" />
                    </Box>
                </Box>
            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                About
                </Heading>
                <Paragraph>    
                    I&apos;m Tai, a passionate student set to graduate in the spring of 2024. When I&apos;m not buried in textbooks,
                    you&apos;ll find me diving headfirst into the world of development, crafting websites, and bringing game projects to life in my spare moments.
                    I&apos;ve always been drawn to the idea of creating digital experiences. Games are my ultimate escape—they inspire me with their creativity.
                    But I also enjoy software development and am learning constantly, turning ideas into reality. This is my website where I showcase my projects.
                    Whether it&apos;s building captivating websites or concocting immersive game worlds, I&apos;m all about blending my hobby with my passion for software development.
                    Thanks for stopping by! Hopefully, we can connect.
                </Paragraph>
                <Box align="center" my={4}>
                    <NextLink href="/works">
                        <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                        My Portfolio
                        </Button>
                    </NextLink>
                </Box>
            </Section>

            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    Timeline
                </Heading>
                <BioSection>
                    <BioYear>2019</BioYear>
                    Started attending University of Colorado, Denver
                    <br />Working towards a Bachelor's in Computer Science and
                    a minor in Biology.
                </BioSection>
                <BioSection>
                    <BioYear>2023</BioYear>
                    Intern at CU Dincuvator
                </BioSection>

            </Section>

            <Section delay={.3}>
                <Heading as="h3" variant="section-title">
                    Other links
                </Heading>
                <List>
                    <ListItem>
                        <Link href="https://github.com/tbaoiom" target="_blank">
                            <Button variant="ghost" colorScheme="teal" leftIcon={<FaGithub />}>Github</Button>
                        </Link>
                        <Link href="https://linkedin.com/in/tai-bui9" target="_blank">
                            <Button variant="ghost" colorScheme="teal" leftIcon={<FaLinkedin />}>Linkedin</Button>
                        </Link>
                    </ListItem>
                </List>
            </Section>

            </Container>
        </Layout>
    )
}

export default Page