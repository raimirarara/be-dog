import { ReactNode } from "react"
import { Box, Container, Stack, Text, VisuallyHidden, chakra, Divider, Flex } from "@chakra-ui/react"
import Link from "next/link"

const SocialButton = ({ children, label, href }: { children: ReactNode; label: string; href: string }) => {
  return (
    <chakra.button
      bg={"blackAlpha.100"}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      target="_blank"
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{ bg: "blackAlpha.200" }}
      fontSize={"md"}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

export default function Footer() {
  return (
    <Box color={"gray.700"}>
      <Divider orientation="horizontal" borderWidth={1} />
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column" }}
        spacing={2}
        align={{ md: "center" }}
        fontSize={"xs"}
      >
        <Link href="/">
          <Text mt={{ base: 2, md: 0 }}> Privacy Policy</Text>
        </Link>
        <Link href="/">
          <Text mt={{ base: 2, md: 0 }}> Terms of Service</Text>
        </Link>
        <Text display={"flex"} mt={{ base: 2, md: 0 }}>
          © 2023&nbsp;
          <Text as={"a"} href="/" target="_blank">
            be dog inc.
          </Text>{" "}
          &nbsp;All rights reserved
        </Text>
      </Container>
    </Box>
  )
}
