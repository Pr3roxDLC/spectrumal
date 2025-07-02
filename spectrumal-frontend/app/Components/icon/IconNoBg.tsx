import * as React from "react"
import Svg, { G, Path, Circle } from "react-native-svg"


function IconNoBg(props) {
  return (
    <Svg
      fill="#fefefe"
      width={"300"}
      height={"300"}
      viewBox="0 0 32 32"
      id="icon"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#fefefe"
      strokeWidth={0.00032}
      {...props}
      style={{ justifyContent: "center", alignSelf: "center" }}
    >
      <G id="SVGRepo_iconCarrier">
        <Path d="M30 15L17 15 17 2 15 2 15 15 2 15 2 17 15 17 15 30 17 30 17 17 30 17 30 15z" />
        <Path d="M5 30a3 3 0 113-3 3.003 3.003 0 01-3 3zm0-4a1 1 0 101 1 1.001 1.001 0 00-1-1zM8 8a3 3 0 113-3 3.003 3.003 0 01-3 3zm0-4a1 1 0 101 1 1.001 1.001 0 00-1-1zM22 13a3 3 0 113-3 3.003 3.003 0 01-3 3zm0-4a1 1 0 101 1 1.001 1.001 0 00-1-1z" />
        <Circle cx={11} cy={11} r={2} />
        <Circle cx={11} cy={21} r={2} />
        <Circle cx={21} cy={21} r={2} />
        <Circle cx={22} cy={28} r={2} />
        <Circle cx={28} cy={24} r={2} />
        <Circle cx={4} cy={11} r={2} />
        <Circle cx={28} cy={4} r={2} />
        <Path
          id="_Transparent_Rectangle_"
          data-name="&lt;Transparent Rectangle&gt;"
          d="M0 0H32V32H0z"
          fill="none"
        />
      </G>
    </Svg>
  )
}

export default IconNoBg
