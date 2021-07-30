import NavBar from './NavBar'
import SlideBar from './SlideBar'
function App() {
  return (
    <div>      
        <NavBar />
        <div className="content-slidebar">
          <SlideBar />
        </div>

    </div>
  );
}

export default App;
