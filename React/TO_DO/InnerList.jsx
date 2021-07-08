function InnerList(props) {
  return (
    <li>
      <span>{props.taskVal}</span>
      <button onClick={()=>{props.remove(props.taskVal)}}>X</button>
    </li>
  );
}
