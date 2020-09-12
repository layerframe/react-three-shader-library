varying vec3 vNormal;

void main() {
  gl_FragColor = vec4(vNormal.xy, 1., 1.0 );
}
