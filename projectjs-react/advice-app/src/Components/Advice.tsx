import React, { useEffect, useState } from 'react'; 
import {Button} from '@mui/material'
import axios from 'axios'


const Advice = () => {
const [loading, setLoading] = useState(false)
const [advice, setAdvice] = useState('')
const [error, setError] = useState(null) 


const handleClick = () => {
setLoading(true)
setError(null)

axios.get('https://api.adviceslip.com/advice').then(res => {
setAdvice(res.data.slip.advice)
setLoading(false)
}).catch(err => {
setError(err.message)
setLoading(false)
})
}
useEffect(() => {
handleClick()
}, [])

 return ( 
<>
<div className="background">
<div className="background-wrapper">
<h4>{loading ? <p>Thinking... </p> : error ? <p>Error Loading Advice</p> : advice}</h4>
  
<Button variant="outlined" color="primary" disabled={loading} onClick={handleClick}>Advice Me!</Button>
</div>
</div>
</>
  ) 
}; 
export default Advice;