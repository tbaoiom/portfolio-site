import { Container, Heading, SimpleGrid, } from '@chakra-ui/react'
// removed Box and Divider from import above
import Section from '../components/section'
//import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

//import thumbInkDrop from '../public/images/works/'        // add image here

const Posts = () => {
    return (
        <Layout>
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    Posts
                </Heading>

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

export default Posts