import {loader} from '../core'

export default function() {
  return new Promise(resolve => {
    loader
      .add('static/textures/misc.json')
      .add('static/textures/vulf-mono.fnt')
      .load(() => {
        const bitmapfontData = loader.resources['static/textures/vulf-mono.fnt'].data
        console.log(bitmapfontData)
        console.log(bitmapfontData instanceof XMLDocument) // false
        // https://github.com/pixijs/pixi.js/blob/dev/packages/text-bitmap/src/formats/index.ts#L20
        // https://github.com/pixijs/pixi.js/blob/dev/packages/text-bitmap/src/formats/XMLFormat.ts#L21
        resolve()
      })
  })
}