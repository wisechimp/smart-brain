import React, { useState, useEffect } from 'react';

const Rank = ({ name, entries }) => {
  const [progress, setProgress] = useState("")

  useEffect(() => {
    console.log("Using effect")
    fetch(`https://xzx7pjz9tl.execute-api.us-east-1.amazonaws.com/prod/rank?rank=${entries}`)
    .then(response => response.json())
    .then(data => setProgress(data.input))
    .catch(console.log('You can\'t even manage to get this up you bungler!'))
  },[entries])

  return (
    <div>
      <div className='white f3'>
        {`${name}, your current entry count is...`}
      </div>
      <div className='white f1'>
        {entries}
      </div>
      <div className='white f3'>
        {`Your Rank: ${progress}`}
      </div>
    </div>
  );
}

export default Rank;