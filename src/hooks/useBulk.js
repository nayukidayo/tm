import { useState } from 'react'

export default function useBulk() {
  const [msgs, setMsgs] = useState([])

  const addMsg = msg => {
    const item = `${new Date().toLocaleTimeString()} ${msg}`
    if (msgs.length < 10) {
      setMsgs([item, ...msgs])
    } else {
      setMsgs([item, ...msgs.slice(0, -1)])
    }
  }

  const clearMsgs = () => {
    setMsgs([])
  }

  return { msgs, addMsg, clearMsgs }
}
