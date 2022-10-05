import { css } from '@emotion/react'
import { CSSTransition } from 'react-transition-group'
import type { ReactNode } from 'react'

type Props = {
  active: boolean
  children: ReactNode
  speed?: number
}

const FadeTransition = ({
  active,
  children,
  speed = 300,
}: Props) => {
  const duration = speed / 1000
  const styles = {
    transition: css`
      .fade-enter {
        opacity: 0;
      }

      .fade-enter-active {
        opacity: 1;
        transition: opacity ${duration}s;
      }

      .fade-exit {
        opacity: 1;
      }

      .fade-exit-active {
        opacity: 0;
        transition: opacity ${duration}s;
      }
    `,
  }

  return (
    <div css={styles.transition}>
      <CSSTransition
        classNames='fade'
        in={active}
        timeout={speed}
        unmountOnExit
      >
        {children}
      </CSSTransition>
    </div>
  )
}

export default FadeTransition
