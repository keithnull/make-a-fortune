import React from "react"
import { Square, Text } from '@chakra-ui/react'

function Logo() {
    return <Square size="35px" shadow="md" borderRadius="md">
        <Text p="1">
            <span className="maf-logo">财</span>
        </Text>
    </Square>
}

export default Logo;
