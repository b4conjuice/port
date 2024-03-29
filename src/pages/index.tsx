import type { ChangeEvent } from 'react'
import { useEffect, useState } from 'react'
import { type NextPage } from 'next'
import { useRouter } from 'next/router'
import classNames from 'classnames'

import Page from '@/components/page'
import Main from '@/components/design/main'
import getPort from '@/lib/getPort'
import copyToClipboard from '@/lib/copyToClipboard'

const Home: NextPage = () => {
  const router = useRouter()
  const { query } = router
  const [text, setText] = useState(query.q ?? '')
  useEffect(() => {
    if (query.q) {
      setText(query.q)
    }
  }, [query])
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setText(value)
    const url: {
      pathname: string
      query: null | { q: string }
    } = {
      pathname: router.pathname,
      query: null,
    }
    if (value) {
      url.query = {
        q: value,
      }
    }
    router.push(url).catch(err => console.log(err))
  }
  const port = getPort(text as string)
  return (
    <Page>
      <Main className='flex-grow flex-col justify-center space-y-4 p-2'>
        <div className='relative border-b-2 border-cb-blue focus-within:border-cb-pink'>
          <input
            className='peer block w-full appearance-none bg-transparent focus:outline-none'
            type='text'
            name='text'
            placeholder=' '
            value={text}
            onChange={handleChange}
          />
          <label
            className='absolute top-0 z-[-1] origin-[0] text-cb-pink duration-300 peer-focus-within:-translate-y-4 peer-focus-within:scale-75 peer-focus-within:text-cb-yellow'
            htmlFor='text'
          >
            type text here
          </label>
        </div>
        <button
          className='group w-full cursor-pointer rounded-lg border-none bg-cb-dark-blue text-center text-lg disabled:pointer-events-none disabled:opacity-25'
          onClick={() => copyToClipboard(port)}
          disabled={!port}
        >
          <span className='block translate-y-[-4px] transform rounded-lg bg-[#5a3e84] p-3 text-lg duration-[600ms] ease-[cubic-bezier(.3,.7,.4,1)] hover:ease-[cubic-bezier(.3,.7,.4,1.5)] group-hover:translate-y-[-6px] group-hover:duration-[250ms] group-active:translate-y-[-2px] group-active:duration-[34ms]'>
            copy port: {port}
          </span>
        </button>
        <a
          className={classNames(
            'group w-full cursor-pointer rounded-lg border-none bg-cb-dark-blue text-center text-lg',
            !port ? 'pointer-events-none opacity-25' : ''
          )}
          target='_blank'
          rel='noopener noreferrer'
          href={`http://localhost:${port}`}
        >
          <span className='block translate-y-[-4px] transform rounded-lg bg-[#5a3e84] p-3 text-lg duration-[600ms] ease-[cubic-bezier(.3,.7,.4,1)] hover:ease-[cubic-bezier(.3,.7,.4,1.5)] group-hover:translate-y-[-6px] group-hover:duration-[250ms] group-active:translate-y-[-2px] group-active:duration-[34ms]'>
            open localhost:{port}
          </span>
        </a>
      </Main>
    </Page>
  )
}

export default Home
