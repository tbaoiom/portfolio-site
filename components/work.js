import NextLink from 'next/link'
import {Box, Link} from '@chakra-ui/react'
// removed heading, image, badge for now
//import { ChevronRightIcon } from '@chakra-ui/icons'

export const Title = ({ children }) => (
    <Box>
        <NextLink href="/works">
            <Link>Works</Link>
        </NextLink>
    </Box>
)

