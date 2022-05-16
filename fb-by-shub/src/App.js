import './App.css';
import Header from '../src/components/Header/Header'
import Sidebar from '../src/components/Sidebar/Sidebar';
import Feed from '../src/components/Feed/Feed'
function App() {
  return (
    <div className="app">
     <Header/>
     <div className="app_body">
       <Sidebar/>
       <Feed/>

      {/* Widgets */}
     </div>   
    </div>
  );
}

export default App;
//npm install -g firebase-tools