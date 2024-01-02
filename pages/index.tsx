import { Inter } from "next/font/google"
import { AspectRatio, Box, Container, Heading, Image, Text } from "@chakra-ui/react"
import Header from "@/components/Header"

import Footer from "@/components/Footer"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Header />
      <Box display={{ base: "block", md: "flex" }} mt={1}>
        <Box width={{ base: "100%", md: "50%" }} height="100%" position="relative">
          <Image src="/hero.jpg" alt="hero" />
        </Box>
        <Box
          sx={{
            width: { base: "100%", md: "50%" },
            padding: "5% 10%",
          }}
        >
          <Heading
            sx={{
              fontSize: { base: "2rem", md: "2.5rem" },
            }}
          >
            <span className="text-blue-500">インサイトセールス</span>に特化した営業のスペシャリストたちが<br></br>
            あなたの営業をサポートします。
          </Heading>
        </Box>
      </Box>
      <Box py={8} display={{ base: "block", md: "flex" }} justifyContent={"space-around"}>
        <Box
          width={{ base: "100%", md: "20%" }}
          display={{ base: "flex", md: "block" }}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Image width={{ base: 150, md: "auto" }} height={240} src="/marketing_4.svg" alt="Selected image" />
          <Text p={4}>インサイトセールスに特化した営業のスペシャリストたちが販売を促進します</Text>
        </Box>
        <Box
          width={{ base: "100%", md: "20%" }}
          display={{ base: "flex", md: "block" }}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Image width={{ base: 150, md: "auto" }} height={240} src="/marketing_2.svg" alt="Selected image" />
          <Text p={4}>インサイトセールスに特化した営業のスペシャリストたちが販売を促進します</Text>
        </Box>
        <Box
          width={{ base: "100%", md: "20%" }}
          display={{ base: "flex", md: "block" }}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Image width={{ base: 150, md: "auto" }} height={240} src="/marketing_1.svg" alt="Selected image" />
          <Text p={4}>インサイトセールスに特化した営業のスペシャリストたちが販売を促進します</Text>
        </Box>
      </Box>
      <Footer />
    </Box>
  )
}
