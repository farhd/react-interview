function Spinner({ spin = false }) {
  return (
    <div className={`text-green-500 spinner ${spin ? 'spin' : ''}`}>
      &#10227;
    </div>
  )
}

export default Spinner
