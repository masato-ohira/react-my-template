import { css, Global } from '@emotion/react'
import { ReactNode } from 'react'
import { rgba } from '@/styles/colors'
import { mobile } from '@/styles/media'
import { useSelector, useDispatch } from 'react-redux'
import { setActive, getters } from '@/store/modal'
import FadeTransition from '@/components/transitions/fade-transition'
import Close from '@material-ui/icons/Close'
import useEscapeKey from '@/hooks/useEscapeKey'

type ModalProps = {
  children?: ReactNode
}
const Modal = (props: ModalProps) => {
  const dispatch = useDispatch()
  const active = useSelector(getters.isActive)
  const styles = setStyle(active)

  const closeModal = () => {
    dispatch(setActive(false))
  }
  useEscapeKey(closeModal)

  return (
    <>
      <Global styles={styles.global}></Global>
      <FadeTransition active={active}>
        <div css={styles.modal} className='contest-modal'>
          <div
            css={styles.close}
            className='contest-modal__close'
            onClick={closeModal}
          >
            <Close />
          </div>
          <div
            css={styles.background}
            className='contest-modal__background'
            onClick={closeModal}
          ></div>
          <div
            css={styles.content}
            className='contest-modal__content'
          >
            {props.children}
          </div>
        </div>
      </FadeTransition>
    </>
  )
}

const setStyle = (active: boolean) => {
  return {
    global: css`
      html,
      body {
        overflow: ${active ? 'hidden' : 'auto'};
      }
    `,

    modal: css`
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: 65000;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
    `,

    close: css`
      position: absolute;
      right: 5px;
      top: 5px;
      opacity: 0.7;
      cursor: pointer;
      z-index: 40;

      svg {
        display: block;
        width: 50px;
        height: 50px;
        fill: #ccc;
      }

      ${mobile} {
        top: 15px;
        right: 15px;

        svg {
          width: 40px;
          height: 40px;
        }
      }
    `,
    background: css`
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: ${rgba('#000', 0.5)};
      z-index: 10;
    `,
    content: css`
      position: relative;
      z-index: 20;
      margin: 15px;
    `,
  }
}

export default Modal
