import { useRef, useState } from 'react'
import {
  Stack,
  TextInput,
  FileButton,
  Button,
  Text,
  Title,
  Group,
  Code,
  Mark,
  CloseButton,
} from '@mantine/core'
import { notifications } from '@mantine/notifications'
import unzip from '../lib/unzip'

export default function Model({ getRemoteModel, getLocalModel, setModel, defaultUri = '' }) {
  const [uri, setUri] = useState(defaultUri)
  const [file, setFile] = useState(null)
  const [uriLoading, setUriLoading] = useState(false)
  const [fileLoading, setFileLoading] = useState(false)

  const handleRemote = async () => {
    try {
      setUriLoading(true)
      const url = `https://teachablemachine.withgoogle.com/models/${uri}/`
      const model = await getRemoteModel(url)
      setModel(model)
      notifications.show({ withBorder: true, title: '模型加载成功' })
    } catch (err) {
      console.log(err)
      notifications.show({ withBorder: true, color: 'red', title: '模型加载失败' })
    } finally {
      setUriLoading(false)
    }
  }

  const handleLocal = async payload => {
    if (payload === null) return
    try {
      setFile(payload)
      setFileLoading(true)
      const obj = await unzip(payload)
      const model = await getLocalModel(obj)
      setModel(model)
      notifications.show({ withBorder: true, title: '模型加载成功' })
    } catch (err) {
      console.log(err)
      notifications.show({ withBorder: true, color: 'red', title: '模型加载失败' })
      clearFile()
    } finally {
      setFileLoading(false)
    }
  }

  const resetRef = useRef(null)

  const clearFile = () => {
    setFile(null)
    resetRef.current?.()
  }

  const isUri = uri !== ''
  const isFile = file !== null

  return (
    <Stack>
      <Title order={3}>1. 模型</Title>
      <Title order={6} c={isFile ? 'dimmed' : undefined}>
        网络链接
      </Title>
      <Group align="end" justify="space-between">
        <TextInput
          styles={{ root: { flexGrow: 1 } }}
          disabled={isFile}
          value={uri}
          onChange={e => setUri(e.currentTarget.value)}
          placeholder="MODEL_ID"
          label={
            <Code>
              https://teachablemachine.withgoogle.com/models/<Mark>MODEL_ID</Mark>/
            </Code>
          }
        />
        <Button disabled={!isUri} loading={uriLoading} onClick={handleRemote}>
          加载
        </Button>
      </Group>
      <Title order={6} c={isUri ? 'dimmed' : undefined}>
        本地文件
      </Title>
      {isFile && (
        <Group>
          <Text>已选择文件：{file.name}</Text>
          <CloseButton onClick={clearFile} />
        </Group>
      )}
      <FileButton resetRef={resetRef} onChange={handleLocal} accept="application/zip">
        {props => (
          <Button disabled={isUri} loading={fileLoading} {...props}>
            上传并加载
          </Button>
        )}
      </FileButton>
    </Stack>
  )
}
