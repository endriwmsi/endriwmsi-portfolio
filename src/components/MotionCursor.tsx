import AnimatedCursor from "react-animated-cursor"

const MotionCursor = () => {
  return (
    <>
      <AnimatedCursor
        innerSize={0}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        outerStyle={{
          backgroundColor: 'rgba(223, 255, 0, 0.4)',
        }}
      />
    </>
  )
}

export default MotionCursor;