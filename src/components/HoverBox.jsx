const HoverBox = () => {
  return (
    <div className='h-26 grid grid-cols-7 w-[70rem] absolute top-[-7rem]'>
      {Array.from({ length: 7 }, (_, i) => i).map(item => (
        <div
          key={item}
          className={`w-24 h-24 hover:bg-red-500 rounded-full cursor-pointer m-auto relative ${
            item === 6 && 'right-4'
          } ${item === 5 && 'right-3'} ${item === 4 && 'right-2'} ${
            item === 1 && 'left-1'
          } ${item === 0 && 'left-2'}`}
        ></div>
      ))}
    </div>
  )
}
export default HoverBox