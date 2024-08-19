import Lesson from './Lesson'
import Model73 from './Model73'
import Predict73 from './Predict73'

export default function Lesson73() {
  return (
    <Lesson
      title="课程 7.3"
      description="這是一個 Teachable Machine Audio 與 Arduino 關聯的網頁，使用前請更新你的訓練模型。"
    >
      {({ setModel, ...rest }) => (
        <>
          <Model73 setModel={setModel} />
          <Predict73 {...rest} />
        </>
      )}
    </Lesson>
  )
}
