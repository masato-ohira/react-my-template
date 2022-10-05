export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
}

export const screens = {
  sm: 640,
  mobile: 768,
  tablet: 769,
  desktop: 1024,
  widescreen: 1216,
  fullhd: 1408,
}

export const mq = (key: keyof typeof breakpoints) =>
  `@media (min-width: ${breakpoints[key]}px)`

// screen sizes
export const mobile = `@media screen and (max-width: ${
  screens.tablet - 1
}px)`
export const tablet = `@media screen and (min-width: ${screens.tablet}), print`
export const touch = `@media screen and (max-width: ${
  screens.desktop - 1
}px)`
export const desktop = `@media screen and (min-width: ${screens.desktop})`
export const widescreen = `@media screen and (min-width: ${screens.widescreen})`
export const fullhd = `@media screen and (min-width: $${screens.fullhd})`
