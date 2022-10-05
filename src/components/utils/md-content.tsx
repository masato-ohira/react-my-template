import MarkdownIt from 'markdown-it'
import { css } from '@emotion/react'

const mdOpts = {
  injected: true,
  breaks: true,
  html: true,
  linkify: true,
  typography: true,
}
const md = new MarkdownIt(mdOpts)

type Props = {
  children?: string
}

const MdContent = ({ children }: Props) => {
  const styles = {
    content: css``,
  }

  return (
    <div
      css={styles.content}
      className='contest-md-content'
      dangerouslySetInnerHTML={{
        __html: md.render(children || ''),
      }}
    ></div>
  )
}

export default MdContent
