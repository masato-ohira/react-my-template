import MoonLoader from 'react-spinners/MoonLoader'
import { css } from '@emotion/react'
import { getters } from '@/store/site'
import { useSelector } from 'react-redux'

const LoaderContent = () => {
  const { color } = useSelector(getters.all)
  const styles = {
    container: css`
      min-height: 100vh;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
    `,
  }
  return (
    <div
      css={styles.container}
      className='contest-loader-content'
    >
      <MoonLoader color={color} />
    </div>
  )
}

export default LoaderContent
