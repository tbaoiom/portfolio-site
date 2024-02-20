import NextLink from 'next/link'
import { Box, Link } from '@chakra-ui/react'

export const Title = () => (
    <Box>
        <NextLink href="/works">
            <Link>Works</Link>
        </NextLink>
    </Box>
)