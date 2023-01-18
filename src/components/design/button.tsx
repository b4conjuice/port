export default function Button(props) {
  return (
    <button
      className='block w-full translate-y-[-4px] transform rounded-lg bg-[#5a3e84] p-3 text-lg duration-[600ms] ease-[cubic-bezier(.3,.7,.4,1)] hover:ease-[cubic-bezier(.3,.7,.4,1.5)] disabled:pointer-events-none disabled:opacity-25 group-hover:translate-y-[-6px] group-hover:duration-[250ms] group-active:translate-y-[-2px] group-active:duration-[34ms]'
      {...props}
    >
      {children}
    </button>
  )
}
