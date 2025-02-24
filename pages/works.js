import { 
    Container, 
    Heading, 
    SimpleGrid, 
    Badge, 
    Image, 
    ListItem 
  } from '@chakra-ui/react'
  //import Section from '../components/section'
  import Layout from '../components/layouts/article'
  import Paragraph from '../components/paragraph'
  
  const Works = () => {
    return (
      <Layout>
        <Container>
          <Heading as="h3" fontSize={20} mb={4}>
            Projects
          </Heading>
          
          {/* Replace Title with a Heading */}
          <Heading as="h4" fontSize={18} mb={2}>
            TravelMate, App BOLD Design-a-thon Entry{' '}
            <Badge ml={2}>Jan, 2024</Badge>
          </Heading>
          
          <Paragraph>
            A social media app idea for young adults who travel. Has a friendly user interface that allows users to create a personalized bio,
            receive recommendations on other users for connections and suggestions for places they would like to travel to. 
            Users will also be able to create groups to plan trips on certain dates and chat with others.
          </Paragraph>
          
          <ListItem>
            <strong>Devpost:</strong>{' '}
            <span>
              https://devpost.com/software/travelmate-vaux3o?ref_content=my-projects-tab&amp;ref_feature=my_projects
            </span>
          </ListItem>
          
          <ul>
            <li>Helped with designing features.</li>
            <li>Contributed to determining the system architecture and algorithms.</li>
            <li>Winner of the Design-a-thon.</li>
          </ul>
          
          {/* Replace WorkImage with Chakra UI's Image */}
          <Image src="/images/works/Travelmate" alt="TravelMate screenshot" mb={4} />
  
          <SimpleGrid columns={[1, 1, 2]} gap={6}>
            {/* Additional work items can be added here */}
          </SimpleGrid>
        </Container>
      </Layout>
    )
  }
  
  export default Works