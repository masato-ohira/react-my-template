export const fonts = {
  sans: `'Noto Sans JP', sans-serif`,
  serif: `'Noto Serif JP', serif`,
  enSans: `'Roboto', sans-serif`,
}

export const rem = (size: number) => {
  return `${size * 0.625}rem`
}

export const px2vw = (size: number) => {
  let rate = 100 / 1920
  return `${rate * size}vw`
}

export const spvw = (size: number) => {
  let rate = 100 / 350
  return `${rate * size}vw`
}
