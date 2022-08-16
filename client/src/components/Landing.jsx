import React, {useEffect} from 'react'

export default function Landing() {

  let dots = ""
  function loader() {
    setTimeout(() => {
      dots = "Loading"
    }, 500);
    setTimeout(() => {
      dots = "Loading."
    }, 500);
    setTimeout(() => {
      dots = "Loading.."
    }, 500);
    setTimeout(() => {
      dots = "Loading..."
    }, 500);


  }
useEffect(() => {
  loader();
  
}, []);


  return (
    <div><h1>loader</h1><h1>{dots}</h1></div>
  )
}
