import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

function useAction(action: Function, data: any) {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(action(data))

    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

export default useAction
