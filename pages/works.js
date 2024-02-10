import { Container, Heading, SimpleGrid, } from '@chakra-ui/react'
// removed Box and Divider from import above
import Section from '../components/section'
//import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'    

const Works = () => {
    return (
        <Layout>
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    Projects
                </Heading>
                <Title>
                    TravelMate, App BOLD Design-a-thon Entry <Badge>Jan, 2024</Badge>
                </Title>
                <p>
                    A social media app idea for young adults who travel. Has a friendly user interface that allows users to create a personalized bio,
                    receive recommendations on other users for connections and recommendations for places they would like to travel to. 
                    Users will also be able to create groups to plan for trips on certain dates and be able to chat with others.
                </p>
                <ListItem>
                    <Meta>Devpost</Meta>
                    <span>https://devpost.com/software/travelmate-vaux3o?ref_content=my-projects-tab&ref_feature=my_projects</span>
                </ListItem>
                <ul>
                    <li>Helped with designing features.</li>
                    <li>Helped with determining the system architecture and algorithms needed for the app.</li>
                    <li>Was a winner of the Design-a-thon.</li>
                </ul>
                <WorkImage src= "/images/works/Travelmate"/>
                <SimpleGrid columns={[1,1,2]} gap={6}>
                    <Section>
                        {/*
                        <WorkGridItem id="inkdrop" title="Inkdrop" thumbnail={thumbInkDrop}>
                            A markdown note taking app
                        </WorkGridItem>
                        */}
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Works