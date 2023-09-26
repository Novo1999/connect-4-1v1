const Modal = () => {
  return (
    <div className='absolute z-10 w-[70rem] h-[40rem] bg-transparent flex flex-col justify-center items-center rounded-2xl'>
      <div className='bg-white w-96 h-96 flex flex-col justify-center items-center rounded-2xl'>
        <div>
          <p>Red Wins</p>
          <p>Blue Wins</p>
        </div>
        <button className='bg-green-500 p-4 rounded-lg cursor-pointer hover:bg-green-300 transition-all duration-200'>
          Play Again
        </button>
      </div>
    </div>
  )
}
export default Modal
