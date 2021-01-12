function ButtonAction(props) {
  return (
    <button className="bg-green-500 text-white border rounded px-1">
      {props.children}
    </button>
  )
}

export default ButtonAction
