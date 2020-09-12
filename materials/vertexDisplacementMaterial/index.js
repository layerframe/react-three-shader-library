import { extend } from 'react-three-fiber'
import { shaderMaterial } from 'drei'

import vertex from './vertex.glsl'
import fragment from './fragment.glsl'

const VertexDisplaceMaterial = shaderMaterial(
  {
    amplitude: 1,
  },
  vertex,
  fragment
)

extend({ VertexDisplaceMaterial })
