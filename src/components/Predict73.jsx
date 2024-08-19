import { useState } from 'react'
import { notifications } from '@mantine/notifications'
import Predict from './Predict'

export default function Predict73({ model, prediction, setPrediction, started, setStarted }) {
  const [loading, setLoading] = useState(false)

  const handlePlay = async () => {
    try {
      setLoading(true)
      const labels = model.wordLabels()
      await model.listen(
        result => {
          setPrediction(
            labels.map((word, i) => ({
              className: word,
              probability: result.scores[i],
            }))
          )
        },
        {
          overlapFactor: 0.5,
          probabilityThreshold: 0.75,
        }
      )
      setStarted(true)
    } catch (err) {
      console.log(err)
      notifications.show({ withBorder: true, color: 'red', title: '麦克风打开失败' })
    } finally {
      setLoading(false)
    }
  }

  const handlePause = async () => {
    try {
      await model.stopListening()
      setStarted(false)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <Predict
        started={started}
        handlePause={handlePause}
        handlePlay={handlePlay}
        loading={loading}
        model={model}
        prediction={prediction}
      />
    </>
  )
}
