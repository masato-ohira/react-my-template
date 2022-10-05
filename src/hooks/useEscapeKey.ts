const KEY_NAME_ESC = 'Escape'
const KEY_EVENT_TYPE = 'keyup'

import { useEffect, useCallback } from 'react'

const useEscapeKey = (handleClose: Function) => {
  const handleEscKey = useCallback(
    (event: any) => {
      if (event.key === KEY_NAME_ESC) {
        handleClose()
      }
    },
    [handleClose],
  )

  useEffect(() => {
    document.addEventListener(
      KEY_EVENT_TYPE,
      handleEscKey,
      false,
    )

    return () => {
      document.removeEventListener(
        KEY_EVENT_TYPE,
        handleEscKey,
        false,
      )
    }
  }, [handleEscKey])
}

export default useEscapeKey
