import logo from './logo.svg';
import './App.css';
import NavMenu from './pages/NavMenu';
import { Switch, Route } from 'react-router-dom';
import Main from './pages/Main';
import Posts from './pages/Posts';
import NotFound from './pages/NotFound';
import PostList from './pages/PostList';
import AddPost from './pages/AddPost';

function App() {
  return (
    <>
    <NavMenu></NavMenu>
    <Switch>
      <Route exact path="/" component={Main}></Route>
      <Route path="/posts" component={PostList}></Route>
      <Route path="/add" component={AddPost}></Route>
      <Route component={NotFound}></Route>
    </Switch>
    </>
  );
}

export default App;
