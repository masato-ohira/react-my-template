import { useSelector, useDispatch } from 'react-redux'
import { getters, setActive } from '@/store/modal'
import { css } from '@emotion/react'
import Modal from '@/components/modal/modal'

const HelloWorld = () => {
  const dispatch = useDispatch()
  const active = useSelector(getters.isActive)

  return (
    <>
      <div className='p-6'>
        <div className='container'>
          <a
            className='button'
            onClick={() => {
              dispatch(setActive(true))
            }}
          >
            モーダル展開
          </a>
        </div>
      </div>
      <Modal>
        <div css={styles.modal} className='box'>
          モーダル内コンテンツ
        </div>
      </Modal>
    </>
  )
}

const styles = {
  modal: css`
    min-width: 480px;
    min-height: 480px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  `,
}

export default HelloWorld
