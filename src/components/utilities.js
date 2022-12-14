export function numberWithCommas(num) {
  // 12345.6789  =>  12,345.6789
  const hasFloat = num.toString().includes('.')
  if (hasFloat) {
    const [integer, float] = [...num.toString().split('.')]
    return integer.replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '.' + float
  }

  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}