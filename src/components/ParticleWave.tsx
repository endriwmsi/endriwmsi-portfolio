// ParticleWave.js
import { useRef, useEffect } from 'react';
import { useFrame, extend, useThree } from '@react-three/fiber';
import * as THREE from 'three';

extend({ ShaderMaterial: THREE.ShaderMaterial });

const vertexShader = `
  attribute float scale;
  void main() {
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = scale * (300.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const fragmentShader = `
  uniform vec3 color;
  void main() {
    if (length(gl_PointCoord - vec2(0.5, 0.5)) > 0.475) discard;
    gl_FragColor = vec4(color, 1.0);
  }
`;

const SEPARATION = 200, AMOUNTX = 500, AMOUNTY = 500;

const ParticleWave = () => {
  const { scene } = useThree();
  const groupRef = useRef();
  const count = useRef(0);

  useEffect(() => {
    const numParticles = AMOUNTX * AMOUNTY;
    const positions = new Float32Array(numParticles * 3);
    const scales = new Float32Array(numParticles);

    let i = 0, j = 0;

    for (let ix = 0; ix < AMOUNTX; ix++) {
      for (let iy = 0; iy < AMOUNTY; iy++) {
        positions[i] = ix * SEPARATION - ((AMOUNTX * SEPARATION) / 2);
        positions[i + 1] = 0;
        positions[i + 2] = iy * SEPARATION - ((AMOUNTY * SEPARATION) / 2);
        scales[j] = 1;
        i += 3;
        j++;
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('scale', new THREE.BufferAttribute(scales, 1));

    const material = new THREE.ShaderMaterial({
      uniforms: { color: { value: new THREE.Color(0xDFFF00) } },
      vertexShader,
      fragmentShader,
    });

    const particles = new THREE.Points(geometry, material);
    groupRef.current.add(particles);
    scene.add(groupRef.current);

  }, [scene]);

  useFrame(() => {
    if (groupRef.current) {
      const positions = groupRef.current.children[0].geometry.attributes.position.array;
      const scales = groupRef.current.children[0].geometry.attributes.scale.array;
      let i = 0, j = 0;
      for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
          positions[i + 1] = (Math.sin((ix + count.current) * 0.3) * 50) + (Math.sin((iy + count.current) * 0.5) * 50);
          scales[j] = (Math.sin((ix + count.current) * 0.3) + 1) * 20 + (Math.sin((iy + count.current) * 0.5) + 1) * 20;
          i += 3;
          j++;
        }
      }
      groupRef.current.children[0].geometry.attributes.position.needsUpdate = true;
      groupRef.current.children[0].geometry.attributes.scale.needsUpdate = true;
    }
    count.current += 0.1;
  });

  return <group ref={groupRef} />;
};

export default ParticleWave;
