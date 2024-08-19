import Lesson from './Lesson'
import Model72 from './Model72'
import Predict72 from './Predict72'

export default function Lesson72() {
  return (
    <Lesson
      title="课程 7.2"
      description="這是一個 Teachable Machine Image 與 Arduino 關聯的網頁，使用前請更新你的訓練模型。"
    >
      {({ setModel, ...rest }) => (
        <>
          <Model72 setModel={setModel} />
          <Predict72 {...rest} />
        </>
      )}
    </Lesson>
  )
}
