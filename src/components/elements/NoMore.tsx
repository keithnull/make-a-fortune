import React from "react"
import { Box, Center, Text, Flex } from "@chakra-ui/react"

function NoMore() {
  return (
    <Flex width="100%">
      <Center flex="1" py={20}>
        <Text size="sm" color="gray.500">
          没有更多帖子了。
        </Text>
      </Center>
      <Box size="80px" p="3">
        <Box width="80px" />
      </Box>
    </Flex>
  )
}

export default NoMore
