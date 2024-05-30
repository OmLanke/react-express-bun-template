import axios from 'axios';

export default function App() {
  axios.get('/api')
    .then((response) => {
      console.log(response.data);
    });
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
      <img src="/smugdog.jpg" alt="An image"/>
    </h1>
  )
}