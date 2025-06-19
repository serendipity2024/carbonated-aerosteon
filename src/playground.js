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
          height: 'max-content',
          left: 149,
          width: 'max-content',
          display: 'flex',
          flexDirection: 'row',
          gap: 50.5,
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
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
          }}
        />
        <img
          src='https://github.com/concrete-utopia/utopia/blob/master/editor/resources/editor/pyramid_fullsize@2x.png?raw=true'
          alt='Utopia logo'
          style={{ width: 118, height: 150 }}
        />
        <img
          src='https://github.com/concrete-utopia/utopia/blob/master/editor/resources/editor/pyramid_fullsize@2x.png?raw=true'
          alt='Utopia logo'
          style={{ width: 118, height: 150 }}
        />
      </div>
    </div>
  )
}
