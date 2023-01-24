import { useState } from 'react'
import { type NextPage } from 'next'

import Page from '@/components/page'
import Main from '@/components/design/main'
import getPort from '@/lib/getPort'
import copyToClipboard from '@/lib/copyToClipboard'

const Home: NextPage = () => {
  const [text, setText] = useState('')
  const port = getPort(text)
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
            onChange={e => setText(e.target.value)}
          />
          <label
            className='absolute top-0 z-[-1] origin-[0] text-cb-pink duration-300 peer-focus-within:-translate-y-4 peer-focus-within:scale-75 peer-focus-within:text-cb-yellow'
            htmlFor='text'
          >
            type text here
          </label>
        </div>
        <button
          className='group w-full cursor-pointer rounded-lg border-none bg-cb-dark-blue text-center text-lg'
          onClick={() => copyToClipboard(port)}
        >
          <span className='block translate-y-[-4px] transform rounded-lg bg-[#5a3e84] p-3 text-lg duration-[600ms] ease-[cubic-bezier(.3,.7,.4,1)] hover:ease-[cubic-bezier(.3,.7,.4,1.5)] group-hover:translate-y-[-6px] group-hover:duration-[250ms] group-active:translate-y-[-2px] group-active:duration-[34ms]'>
            copy port: {port}
          </span>
        </button>
      </Main>
    </Page>
  )
}

export default Home
