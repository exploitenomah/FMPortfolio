import Bubble from "./Bubble"
import getRandomInt from "../_utils/getRandomInt"
import { useState, useEffect, useCallback } from "react"

export default function Bubbles({
  bubbleCount = 10,
}: {
  bubbleCount?: number
}) {
  const [bubbles, setBubbles] = useState<
    { width: number; top: number; left: number }[]
  >([])

  const generateBubbles = useCallback((width: number, height: number) => {
    let count = bubbleCount > 50 ? 50 : bubbleCount
    while (count > 0) {
      setBubbles((prev) => [
        ...prev,
        {
          width: 100 * Math.random(),
          left: getRandomInt(0, width),
          top: getRandomInt(0, height),
        },
      ])
      count--
    }
  }, [bubbleCount])

  useEffect(() => {
    if (bubbles.length === 0) generateBubbles(window.innerWidth, window.innerHeight)
  }, [bubbles, generateBubbles])

  return (
    <>
      {bubbles.map(({ width, top, left }) => (
        <Bubble
          className={`bg-red-300/20 z-[0]`}
          key={width}
          style={{ width, height: width, top: `${top}px`, left: `${left}px` }}
        />
      ))}
    </>
  )
}
