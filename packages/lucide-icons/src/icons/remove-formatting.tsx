import type { IconProps } from '@tamagui/helpers-icon'
import { themed } from '@tamagui/helpers-icon'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import {
  Defs,
  Ellipse,
  G,
  Line,
  LinearGradient,
  Path,
  Polygon,
  Polyline,
  RadialGradient,
  Rect,
  Stop,
  Svg,
  Symbol,
  Use,
  Circle as _Circle,
  Text as _Text,
} from 'react-native-svg'

const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
    >
      <Path d="M4 7V4h16v3" stroke={color} />
      <Path d="M5 20h6" stroke={color} />
      <Path d="M13 4 8 20" stroke={color} />
      <Path d="m15 15 5 5" stroke={color} />
      <Path d="m20 15-5 5" stroke={color} />
    </Svg>
  )
}

Icon.displayName = 'RemoveFormatting'

export const RemoveFormatting = memo<IconProps>(themed(Icon))
