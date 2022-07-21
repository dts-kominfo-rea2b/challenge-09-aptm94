import './App.css';
import Contact from './components/Contact';
import Header from './components/Header';

// Uncomment untuk memuat daftar kontak
import contacts from './data/contacts.json';

const App = () => {
  // Masukkan Header dan Contact ke dalam div App
  return (
    <div className="App">
      <Header judul="Call a Friend" subJudul="your friendly contact app"/>
      {contacts.map((item) => {      
        return <Contact name={item.name} phone={item.phone} email={item.email} photo={item.photo} />;
      })}

    </div>
  );
}

export default App;
