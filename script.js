const scroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});

Shery.textAnimate(".nav a" /* Element to target.*/, {
  //Parameters are optional.
  style: 1,
  y: 10,
  delay: 0.1,
  duration: 5,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  // multiplier: 0.1,
});

Shery.textAnimate(".heading h1" /* Element to target.*/, {
  //Parameters are optional.
  style: 1,
  y: 10,
  delay: 0.1,
  duration: 3,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
});

Shery.imageEffect(".img-text img", {
  style: 4,
  config: {
    uColor: { value: false },
    uSpeed: { value: 1, range: [0.1, 1], rangep: [1, 10] },
    uAmplitude: { value: 3.89, range: [0, 5] },
    uFrequency: { value: 2.82, range: [0, 10] },
    geoVertex: { range: [1, 64], value: 42.84 },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 0.75 },
    ignoreShapeAspect: { value: true },
    shapePosition: { value: { x: 0, y: 0 } },
    shapeScale: { value: { x: 0.5, y: 0.5 } },
    shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
    shapeRadius: { value: 0, range: [0, 2] },
    currentScroll: { value: 0 },
    scrollLerp: { value: 0.07 },
    gooey: { value: false },
    infiniteGooey: { value: false },
    growSize: { value: 4, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1.21, range: [1, 5] },
    scrollType: { value: 0 },
    noEffectGooey: { value: true },
    onMouse: { value: 1 },
    noise_speed: { value: 0.2, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2] },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0.002, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 10, range: [0, 100] },
  },
  // debug : true
});

gsap.from(".img-text img", {
  z: 10,
  opacity: 0,
  delay: 1,
  duration: 3,
});

Shery.imageEffect(".sustain img", {
  style: 4,
  config: {
    uColor: { value: false },
    uSpeed: { value: 0.6, range: [0.1, 1], rangep: [1, 10] },
    uAmplitude: { value: 1.5, range: [0, 5] },
    uFrequency: { value: 3.5, range: [0, 10] },
    geoVertex: { range: [1, 64], value: 12.06 },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 0.9230624624166116 },
    ignoreShapeAspect: { value: true },
    shapePosition: { value: { x: 0, y: 0 } },
    shapeScale: { value: { x: 0.5, y: 0.5 } },
    shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
    shapeRadius: { value: 0, range: [0, 2] },
    currentScroll: { value: 0 },
    scrollLerp: { value: 0.07 },
    gooey: { value: false },
    infiniteGooey: { value: false },
    growSize: { value: 4, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1.37, range: [1, 5] },
    scrollType: { value: 0 },
    noEffectGooey: { value: true },
    onMouse: { value: 1 },
    noise_speed: { value: 0.2, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2] },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0.002, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 10, range: [0, 100] },
  },
  // debug : true
});

Shery.imageEffect(".banner-img", {
  style: 6,
  config: {
    noiseDetail: { value: 11.45, range: [0, 100] },
    distortionAmount: { value: 1.22, range: [0, 10] },
    scale: { value: 70.99, range: [0, 100] },
    speed: { value: 0.22, range: [0, 1] },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 2.046950331961174 },
    ignoreShapeAspect: { value: true },
    shapePosition: { value: { x: 0, y: 0 } },
    shapeScale: { value: { x: 0.5, y: 0.5 } },
    shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
    shapeRadius: { value: 0, range: [0, 2] },
    currentScroll: { value: 0 },
    scrollLerp: { value: 0.07 },
    gooey: { value: true },
    infiniteGooey: { value: true },
    growSize: { value: 4, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1, range: [1, 5] },
    scrollType: { value: 0 },
    geoVertex: { range: [1, 64], value: 1 },
    noEffectGooey: { value: false },
    onMouse: { value: 0 },
    noise_speed: { value: 0.99, range: [0, 10] },
    metaball: { value: 0.17, range: [0, 2], _gsap: { id: 66 } },
    discard_threshold: { value: 0.73, range: [0, 1] },
    antialias_threshold: { value: 0, range: [0, 0.1] },
    noise_height: { value: 0.29, range: [0, 2] },
    noise_scale: { value: 20.61, range: [0, 100] },
  },
  // debug: true,
  gooey: true,
});

document.querySelector(".f-text button")
.addEventListener("mouseover" ,function(){
    gsap.to(".future video",{
        opacity:1,
        duration:1.5,
        ease:Power4
    })
})

document.querySelector(".f-text button")
.addEventListener("mouseleave" ,function(){
    gsap.to(".future video",{
        opacity:0,
        duration:1.5,
        ease:Power4
    })
})


