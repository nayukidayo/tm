import { useState } from 'react'
import { Stack, Title, Text } from '@mantine/core'
import Arduino from './Arduino'

export default function Lesson({ title, description, children }) {
  const [model, setModel] = useState(null)
  const [prediction, setPrediction] = useState([])
  const [started, setStarted] = useState(false)

  return (
    <Stack mt="md">
      <Title>{title}</Title>
      <Text>{description}</Text>
      {children({ setModel, model, prediction, setPrediction, started, setStarted })}
      <Arduino prediction={prediction} started={started} />
    </Stack>
  )
}
