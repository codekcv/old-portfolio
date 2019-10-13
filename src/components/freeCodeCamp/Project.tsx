import React from "react"
import styled from "styled-components"

export interface ProjectInt {
  title: string
  description: string
}

interface Props {
  project: ProjectInt
}

const Project: React.FC<Props> = ({ project }) => {
  const { title, description } = project

  return (
    <Container>
      <h2>{title}</h2>
      <p>{description}</p>
      {console.log("wtf now are we doing...")}
    </Container>
  )
}

const Container = styled.div`
  h2 {
    font-size: 1.5rem;
  }
`

export default Project
