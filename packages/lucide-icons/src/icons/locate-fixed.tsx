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
      <Line x1="2" x2="5" y1="12" y2="12" stroke={color} />
      <Line x1="19" x2="22" y1="12" y2="12" stroke={color} />
      <Line x1="12" x2="12" y1="2" y2="5" stroke={color} />
      <Line x1="12" x2="12" y1="19" y2="22" stroke={color} />
      <_Circle cx="12" cy="12" r="7" stroke={color} />
      <_Circle cx="12" cy="12" r="3" stroke={color} />
    </Svg>
  )
}

Icon.displayName = 'LocateFixed'

export const LocateFixed = memo<IconProps>(themed(Icon))
