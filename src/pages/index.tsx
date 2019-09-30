import React from "react"
import "./global.css"
import styled from "styled-components"
import { Header } from "../components/Header"
import { Skills } from "../components/Skills"
import { Projects } from "../components/Projects"
import { Contact } from "../components/Contact"
import { Footer } from "../components/Footer"

const index: React.FC = () => {
  return (
    <Container>
      <Header />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </Container>
  )
}

const Container = styled.main`
  width: 1200px;
  border: 2px pink solid;
  margin: 0 auto;
`

export default index
