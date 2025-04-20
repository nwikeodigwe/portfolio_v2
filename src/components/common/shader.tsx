import React from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Canvas } from "@react-three/fiber";
import { ShaderMaterial, Vector2 } from "three";

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform vec2 iResolution;
  uniform float iTime;
  varying vec2 vUv;

  #define TIME (iTime / 3.0)

  float rand(vec2 co) {
      return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
  }

  vec2 hash22(vec2 p) {
      vec3 p3 = fract(vec3(p.xyx) * vec3(.1031, .1030, .0973));
      p3 += dot(p3, p3.yzx+33.33);
      return fract((p3.xx+p3.yz)*p3.zy);
  }

  float noise(vec2 p) {
      vec2 i = floor(p);
      vec2 f = fract(p);
      f = f * f * (3.0 - 2.0 * f);
      
      float a = dot(hash22(i), f);
      float b = dot(hash22(i + vec2(1.0, 0.0)), f - vec2(1.0, 0.0));
      float c = dot(hash22(i + vec2(0.0, 1.0)), f - vec2(0.0, 1.0));
      float d = dot(hash22(i + vec2(1.0, 1.0)), f - vec2(1.0, 1.0));
      
      return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
  }

  float fbm(vec2 p) {
      float sum = 0.0;
      float amp = 1.0;
      float freq = 1.0;
      for(int i = 0; i < 6; i++) {
          sum += amp * noise(p * freq);
          amp *= 0.6;
          freq *= 2.0;
          p = vec2(p.y - p.x, p.x + p.y) * .7;
      }
      return sum;
  }

  vec3 chromatic(vec2 uv, float offset) {
      float r = fbm(uv + vec2(offset * 0.02, 0.0));
      float g = fbm(uv);
      float b = fbm(uv - vec2(offset * 0.02, 0.0));
      return vec3(r, g, b);
  }

  void mainImage(out vec4 fragColor, in vec2 fragCoord) {
      vec2 uv = fragCoord/iResolution.xy;
      float t = TIME * 0.5;
      
      vec2 distort = vec2(
          fbm(uv * 3.0 + t * 0.2),
          fbm(uv * 2.0 - t * 0.3)
      ) * 0.1;
      
      vec2 distort2 = vec2(
          fbm(uv * .0 - t * 0.4 + distort.x),
          fbm(uv * 3.0 + t * 0.5 + distort.y)
      ) * 0.08;
      
      vec2 distortedUV = uv + distort + distort2;
      
      float staticNoise = rand(uv + t * 0.1) * 0.15;
      
      float n1 = fbm(distortedUV * 2.0 + t * 0.3);
      float n2 = fbm(distortedUV * 4.0 - t * 0.4);
      float n3 = fbm(distortedUV * 6.0 + t * 0.5);
      
      float finalNoise = n1 * 0.6 + n2 * 0.3 + n3 * 0.3;
      
      vec3 chromaticNoise = chromatic(distortedUV * 2.0 + t * 0.3, finalNoise);
      
      vec3 bgColor = vec3(0.1, 0.12, 0.2);      // Deeper blue base
      vec3 midColor = vec3(0.25, 0.22, 0.35);    // Purple mid-tones
      vec3 highlightColor = vec3(0.45, 0.4, 0.5); // Lavender highlights
      vec3 accentColor = vec3(0.5, 0.3, 0.4);     // Deep red accent
      
      vec2 pixelUV = floor(uv * iResolution.xy / 3.0) * 3.0 / iResolution.xy;
      float pixelNoise = fbm(pixelUV * 15.0 + t) * 1.5;
      
      vec2 moonPos = vec2(0.7 + sin(t * 0.3) * 0.02, 0.7 + cos(t * 0.2) * 0.02);
      float moon = smoothstep(0.15, 0.0, length(distortedUV - moonPos));
      
      vec3 color = mix(bgColor, midColor, finalNoise);
      color = mix(color, highlightColor, pixelNoise * 0.5);

      float iridescence = fbm(distortedUV * 4.0 - t * 0.2) * 0.15;
      color += accentColor * iridescence;
      
      color += staticNoise;
      
      vec3 moonColor = vec3(0.9, 0.85, 0.9); // Slight purple tint
      float moonMask = moon * (1.0 - length(distort * 3.0));
      color = mix(color, moonColor, moonMask * 0.4);
      
      float vignette = length(uv - 0.5);
      color *= 1.0 - vignette * 0.7;

      float scanline = sin(distortedUV.y * iResolution.y * 0.5) * 0.02;
      color += scanline;

      float interference = sin(distortedUV.y * 100.0 + t * 5.0) * 0.02;
      color += interference * (rand(vec2(t)) * 0.5 + 0.5) * (1.0 - finalNoise * 0.5);

      color += (chromaticNoise - 0.5) * 0.1 * (1.0 - length(color));

      float darkNoise = rand(distortedUV * 2.0 + t) * 0.08 * (1.0 - length(color));
      color += darkNoise;
      
      float depthDarkness = smoothstep(0.2, 0.8, uv.y);
      color *= mix(0.7, 1.0, depthDarkness);

      fragColor = vec4(color, 1.0);
  }

  void main() {
      vec2 fragCoord = vUv * iResolution;
      vec4 color = vec4(0.0);
      mainImage(color, fragCoord);
      gl_FragColor = color;
  }
`;

const DarkShader = () => {
  const materialRef = React.useRef<ShaderMaterial>(null);
  const { size, viewport } = useThree();

  const shaderMaterial = React.useMemo(
    () =>
      new ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: {
          iTime: { value: 0 },
          iResolution: {
            value: new Vector2(size.width * 0.2, size.height * 0.2),
          },
        },
        transparent: true,
        depthWrite: false,
        depthTest: false,
      }),
    [size.width, size.height]
  );

  useFrame(({ clock }) => {
    if (materialRef.current) {
      materialRef.current.uniforms.iTime.value = clock.getElapsedTime();
      materialRef.current.uniforms.iResolution.value.set(
        size.width * 0.2,
        size.height * 0.2
      );
    }
  });

  return (
    <mesh scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry args={[1, 1]} />
      <primitive ref={materialRef} object={shaderMaterial} attach="material" />
    </mesh>
  );
};

const Shader = () => {
  return (
    <Canvas
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: -1,
      }}
      camera={{ position: [0, 0, 1] }}
    >
      <DarkShader />
    </Canvas>
  );
};

export default Shader;
