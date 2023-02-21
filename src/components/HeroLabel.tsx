type HeroLabelProps = {
  id: string
  name: string
  // eslint-disable-next-line @typescript-eslint/ban-types
  onClick?: Function
}

const HeroLabel = ({ id, name, onClick = () => null }: HeroLabelProps) => {
  return (
    <p
      onClick={() => onClick(id)}
      className='border rounded p-2 my-1 border-gray-700 cursor-pointer hover:bg-gray-100'
    >
      <span className='font-semibold text-gray-500 pr-2 my-2'>#{id}</span>- {name}
    </p>
  )
}

export default HeroLabel
