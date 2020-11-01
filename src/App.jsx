import React from 'react';
import {firebase} from './firebase';

function App() {

  React.useEffect(() => {
    
    const obtenerDatos = async() => {
      try {
        const db = firebase.firestore()
        const data = await db.collection('tareas').get()
        console.log(data.docs)
      } catch (error) {
        console.log(error)
      }
    }

    obtenerDatos();

  }, []);

  return (
    <div className="container">
      Firebase      
    </div>
  );
}

export default App;
