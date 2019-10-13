import React from "react"
import styled from "styled-components"
import Project, { ProjectInt } from "./freeCodeCamp/Project"

interface Props {}

export const Projects: React.FC<Props> = () => {
  const projects: ProjectInt[] = [
    {
      title: "Anonymous Message Board",
      description:
        "A full-stack app that uses MERN stack. Quality assurance via chai & mocha",
    },
    {
      title: "Stock Price Checker",
      description:
        "A full-stack app that uses MERN stack. Quality assurance via chai & mocha",
    },
    {
      title: "Issue Tracker",
      description:
        "A full-stack app that uses MERN stack. Quality assurance via chai & mocha",
    },
    {
      title: "ReactJS Calculator",
      description: "A calculator app built in ReactJS.",
    },
    {
      title: "Pomodoro Clock",
      description: "A Pomodo timer app built in ReactJS.",
    },
    {
      title: "Walter White Tribute Page",
      description: "A Pomodo timer app built in ReactJS.",
    },
    {
      title: "Product Landing Page",
      description: "A Pomodo timer app built in ReactJS.",
    },
  ]

  return (
    <Container>
      <h1>@Projects</h1>
      {projects.map(project => (
        <Project project={project} />
      ))}
    </Container>
  )
}

const Container = styled.div``
