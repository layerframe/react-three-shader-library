import { extend } from "react-three-fiber";
import { shaderMaterial } from "drei";

import vertex from "./vertex.glsl";
import fragment from "./fragment.glsl";

const VoronoiMaterial = shaderMaterial(
  { multi: 1, divisions: 13 },
  vertex,
  fragment
);

extend({ VoronoiMaterial });
