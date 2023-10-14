import {useState} from 'react';

function App() {
  const [name, setName] = useState('Umudvar');
  const [age, setAge] = useState(25);
  const [friends, setFriends] = useState(['ELi, Veli']);
  const [address, setAddress] = useState({title: 'Baku', zip: '1099'});
  return (
    <div className='App'>
      <h1>Hello {name}!</h1>
      <h2>Age {age}!</h2>
      <button onClick={ () => setName("Habiloglu") }>ChangeName</button>
      <br />
      <button onClick={ () => setAge(26) }>ChangeAge</button>

      <hr />
      <br></br>

      <h2>Friends</h2>
      {
        friends.map((friends, key) => (
        <div key = {key}>{friends}</div>
        ))}
        <br />
      <button onClick={ () => setFriends([...friends,'Pirveli']) }>AddNewFriend</button>

      <hr />
      <br></br>

      <h2>Address</h2>
      <div>{address.title} {address.zip}</div>
      
      <br />
          
      <button onClick={ () => setAddress({title: 'Gabala', zip: '1036'}) }>ChangeAddress</button>

      <hr />
    </div>
  );
}

export default App;
