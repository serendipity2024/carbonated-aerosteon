import * as React from 'react'
import { View } from 'utopia-api'
import '../public/globals.css'
import { Group } from 'utopia-api'

export var Playground = ({ style }) => {
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        contain: 'layout',
        ...style,
      }}
    >
      <div
        style={{
          backgroundColor: '#aaaaaa33',
          position: 'absolute',
          top: 296,
          height: 305,
          left: 149,
          width: 471,
        }}
      >
        <img
          src='https://github.com/concrete-utopia/utopia/blob/master/editor/resources/editor/pyramid_fullsize@2x.png?raw=true'
          alt='Utopia logo'
          style={{
            width: 118,
            height: 150,
            borderRadius: 5,
            overflow: 'hidden',
            position: 'absolute',
            left: 0,
            top: 0,
          }}
        />
        <img
          src='https://github.com/concrete-utopia/utopia/blob/master/editor/resources/editor/pyramid_fullsize@2x.png?raw=true'
          alt='Utopia logo'
          style={{
            width: 118,
            height: 150,
            position: 'absolute',
            left: 149,
            top: 15,
          }}
        />
        <img
          src='https://github.com/concrete-utopia/utopia/blob/master/editor/resources/editor/pyramid_fullsize@2x.png?raw=true'
          alt='Utopia logo'
          style={{
            width: 118,
            height: 150,
            position: 'absolute',
            left: 311,
            top: 78,
          }}
        />
      </div>
    </div>
  )
}
