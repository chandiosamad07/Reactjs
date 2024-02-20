import React, { useState } from 'react'

const ManagingState = () => {
    const [answer ,setAnswer] = useState('');
    const [error , setError] = useState(null);
    const [status , setStatus] = useState('typing');
    if(status === 'success') {
        return <h1>That's Right</h1>
    }

    async function handleSubmit(e){
        e.prevetDefault();
        setStatus('submitting')
        try{
            await submitForm(answer);
            setStatus('success');
        }
        catch (err){
            setStatus('typing');
            setError(err)
        }
    }

    function handleTextareaChange (e){
        setAnswer(e.target.value);
    }

  return (

    <div>ManagingState</div>
  )
}

export default ManagingState