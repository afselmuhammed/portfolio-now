import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const PARTICLE_COUNT = 520;
const ACCENT = new THREE.Color("#60A5FA");

export default function HoverField() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (reduceMotion || isTouch) return undefined;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 100);
    camera.position.z = 18;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const base = new Float32Array(PARTICLE_COUNT * 3);
    const sizes = new Float32Array(PARTICLE_COUNT);
    const speeds = new Float32Array(PARTICLE_COUNT);

    for (let i = 0; i < PARTICLE_COUNT; i += 1) {
      const i3 = i * 3;
      const x = (Math.random() - 0.5) * 28;
      const y = (Math.random() - 0.5) * 16;
      const z = (Math.random() - 0.5) * 8;
      positions[i3] = x;
      positions[i3 + 1] = y;
      positions[i3 + 2] = z;
      base[i3] = x;
      base[i3 + 1] = y;
      base[i3 + 2] = z;
      sizes[i] = 0.035 + Math.random() * 0.08;
      speeds[i] = 0.25 + Math.random() * 0.75;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("aSize", new THREE.BufferAttribute(sizes, 1));

    const material = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      uniforms: {
        uColor: { value: ACCENT },
        uPixelRatio: { value: Math.min(window.devicePixelRatio, 1.75) },
      },
      vertexShader: `
        attribute float aSize;
        uniform float uPixelRatio;
        void main() {
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = aSize * uPixelRatio * (180.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform vec3 uColor;
        void main() {
          vec2 uv = gl_PointCoord - 0.5;
          float d = length(uv);
          float alpha = smoothstep(0.5, 0.08, d);
          gl_FragColor = vec4(uColor, alpha * 0.85);
        }
      `,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    const glowGeo = new THREE.CircleGeometry(1.15, 48);
    const glowMat = new THREE.MeshBasicMaterial({
      color: ACCENT,
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const glow = new THREE.Mesh(glowGeo, glowMat);
    glow.position.z = 4;
    scene.add(glow);

    const ringGeo = new THREE.RingGeometry(0.55, 0.7, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: ACCENT,
      transparent: true,
      opacity: 0,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.position.z = 4.1;
    scene.add(ring);

    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0, active: false };
    const clock = new THREE.Clock();
    let frameId = 0;
    let ripples = [];

    function resize() {
      const { clientWidth: width, clientHeight: height } = mount;
      if (!width || !height) return;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    }

    function onPointerMove(event) {
      const rect = mount.getBoundingClientRect();
      const nx = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const ny = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
      mouse.targetX = nx * 10;
      mouse.targetY = ny * 6;
      mouse.active = true;
    }

    function onPointerLeave() {
      mouse.active = false;
    }

    function onPointerDown(event) {
      onPointerMove(event);
      ripples.push({
        x: mouse.targetX,
        y: mouse.targetY,
        life: 0,
        max: 1.1,
      });
      if (ripples.length > 4) ripples.shift();
    }

    function animate() {
      frameId = window.requestAnimationFrame(animate);
      const t = clock.getElapsedTime();
      const pos = geometry.attributes.position.array;

      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      glow.position.x = mouse.x;
      glow.position.y = mouse.y;
      ring.position.x = mouse.x;
      ring.position.y = mouse.y;

      const glowStrength = mouse.active ? 0.22 : 0.04;
      glowMat.opacity += (glowStrength - glowMat.opacity) * 0.1;
      ring.scale.setScalar(0.85 + Math.sin(t * 3.2) * 0.08);
      ringMat.opacity += ((mouse.active ? 0.45 : 0.08) - ringMat.opacity) * 0.1;

      for (let i = 0; i < PARTICLE_COUNT; i += 1) {
        const i3 = i * 3;
        const bx = base[i3];
        const by = base[i3 + 1];
        const bz = base[i3 + 2];

        const dx = bx - mouse.x;
        const dy = by - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy) + 0.001;
        const force = mouse.active ? Math.min(2.4 / (dist * dist), 1.8) : 0;
        const angle = Math.atan2(dy, dx);

        const driftX = Math.sin(t * speeds[i] + bx) * 0.08;
        const driftY = Math.cos(t * speeds[i] * 0.8 + by) * 0.08;

        const targetX = bx + Math.cos(angle) * force + driftX;
        const targetY = by + Math.sin(angle) * force + driftY;
        const targetZ = bz + Math.sin(t * 0.6 + i) * 0.12;

        pos[i3] += (targetX - pos[i3]) * 0.085;
        pos[i3 + 1] += (targetY - pos[i3 + 1]) * 0.085;
        pos[i3 + 2] += (targetZ - pos[i3 + 2]) * 0.06;
      }

      ripples = ripples
        .map((ripple) => {
          ripple.life += 0.02;
          const progress = ripple.life / ripple.max;
          const radius = progress * 4.5;
          for (let i = 0; i < PARTICLE_COUNT; i += 1) {
            const i3 = i * 3;
            const dx = pos[i3] - ripple.x;
            const dy = pos[i3 + 1] - ripple.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const band = Math.abs(dist - radius);
            if (band < 0.55) {
              const push = (0.55 - band) * (1 - progress) * 0.35;
              pos[i3] += (dx / (dist + 0.001)) * push;
              pos[i3 + 1] += (dy / (dist + 0.001)) * push;
            }
          }
          return ripple;
        })
        .filter((ripple) => ripple.life < ripple.max);

      geometry.attributes.position.needsUpdate = true;
      points.rotation.z = Math.sin(t * 0.05) * 0.02;
      renderer.render(scene, camera);
    }

    resize();
    animate();

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerdown", onPointerDown, { passive: true });
    window.addEventListener("pointerleave", onPointerLeave);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointerleave", onPointerLeave);
      geometry.dispose();
      material.dispose();
      glowGeo.dispose();
      glowMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div aria-hidden="true" className="hover-field" ref={mountRef} />;
}
