import { Stack, Button, Text, Title } from '@mantine/core'

export default function Predict({
  children,
  started,
  handlePause,
  handlePlay,
  loading,
  model,
  prediction,
}) {
  return (
    <>
      <Stack>
        <Title order={3}>2. 输入</Title>
        {started ? (
          <Button onClick={handlePause} color="red">
            暂停
          </Button>
        ) : (
          <Button onClick={handlePlay} disabled={!model} loading={loading}>
            开始
          </Button>
        )}
        {children}
      </Stack>
      <Stack>
        <Title order={3}>3. 输出</Title>
        <Stack>
          {prediction.length === 0 && <Text c="dimmed">等待输入 ...</Text>}
          {prediction.map(v => (
            <Text key={v.className}>
              {v.className}: {v.probability}
            </Text>
          ))}
        </Stack>
      </Stack>
    </>
  )
}
