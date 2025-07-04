import * as React from 'react'
import { Scene, Storyboard } from 'utopia-api'
import { App } from '../src/app'
import { Playground } from '../src/playground'

export var storyboard = (
  <Storyboard>
    <Scene
      id='playground-scene'
      commentId='playground-scene'
      style={{
        width: 734,
        height: 759,
        position: 'absolute',
        left: 99,
        top: 121,
        borderRadius: '0px',
        overflow: 'hidden',
      }}
      data-label='Playground'
    >
      <Playground style={{}} />
    </Scene>
    <Scene
      id='app-scene'
      commentId='app-scene'
      style={{
        width: 744,
        height: 1133,
        position: 'absolute',
        left: 1036,
        top: 128,
      }}
      data-label='My App'
    >
      <App style={{}} />
    </Scene>
  </Storyboard>
)
