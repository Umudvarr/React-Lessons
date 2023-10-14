import {useState} from 'react'

function InputExample() {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');

  return (
    <div>
        Name.
        <br />
        <input value={name} onChange={ (event) => setName(event.target.value)} />
        <br/>

        <br />
        Surname.
        <br />
        <input value={surname} onChange={ (event) => setSurname(event.target.value)} />
        <br/>
        <br/>

        {name} {surname}
    </div>
  )
}

export default InputExample