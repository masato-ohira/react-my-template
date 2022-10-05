export const colors = {
  primary: '#008C81',
  link: '#234d73',
  success: '#56B132',
  info: '#00B2E8',
  warning: '#eda629',
  danger: '#ea2b00',
  text: '#222',
  bg: '#E8ECF4',
}

// rgb
export const rgb = (hex: string) => {
  try {
    if (/^#/.test(hex)) {
      hex = hex.slice(1)
    }
    if (hex.length !== 3 && hex.length !== 6) {
      throw new Error('Invaild hex String')
    }

    let digit = hex.split('')

    if (digit.length === 3) {
      digit = [
        digit[0],
        digit[0],
        digit[1],
        digit[1],
        digit[2],
        digit[2],
      ]
    }
    let r = parseInt([digit[0], digit[1]].join(''), 16)
    let g = parseInt([digit[2], digit[3]].join(''), 16)
    let b = parseInt([digit[4], digit[5]].join(''), 16)
    return [r, g, b].join(',')
  } catch (error) {
    return null
  }
}

export const rgba = (hex: string, opacity: number) => {
  return `rgba(${rgb(hex)}, ${opacity})`
}
