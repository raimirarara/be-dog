import { Box, Center, Heading, Image, Link, Spacer, Text } from "@chakra-ui/react"

export default function Header() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "70px",
        shadow: "md",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Image
        src="/be-dog_logo.png"
        alt="logo"
        width={{ base: 30, md: 50 }}
        height={{ base: 30, md: 50 }}
        rounded={"full"}
        ml={2}
      />
      <Heading ml={2} mr={{ base: 4, md: 8 }} fontSize={{ base: "md", md: "2xl" }} display={"flex"}>
        Be dog
      </Heading>
      <Link href="/" px={{ base: 1, md: 2 }} fontSize={{ base: "xs", md: "sm" }}>
        事例
      </Link>
      <Link href="/" px={{ base: 1, md: 2 }} fontSize={{ base: "xs", md: "sm" }}>
        セミナー
      </Link>
      <Link href="/" px={{ base: 1, md: 2 }} fontSize={{ base: "xs", md: "sm" }}>
        会社概要
      </Link>
      <Link href="/" px={{ base: 1, md: 2 }} fontSize={{ base: "xs", md: "sm" }}>
        採用情報
      </Link>
      <Spacer />

      <Center width={120} height={"full"} bg={"blue.600"}>
        <Link href="/">
          <Text textColor={"white"} textAlign={"center"} fontWeight={"bold"}>
            資料請求
          </Text>
        </Link>
      </Center>
      <Center width={150} height={"full"} bg={"black"}>
        <Link href="/">
          <Text textColor={"white"} textAlign={"center"} fontWeight={"bold"}>
            お問い合わせ
          </Text>
        </Link>
      </Center>
    </Box>
  )
}
