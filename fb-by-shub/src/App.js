import './App.css';
import Header from '../src/components/Header/Header'
import Sidebar from '../src/components/Sidebar/Sidebar';
import Feed from '../src/components/Feed/Feed'
import Widgets from '../src/components/Widgets/Widgets'
// import Login from '../src/components/Login/Login'
function App() {
  const user= null;
  return (
    <div className="app">
      {!user?
      (
        <h1>Login</h1>
      // <Login/>
      ):(
        <>
        <Header/>
     <div className="app_body">
       <Sidebar/>
       <Feed/>

      {/* Widgets */}
      <Widgets/>
     </div>  
     </>
      )}
      
    </div>
  );
}

export default App;
//npm install -g firebase-tools