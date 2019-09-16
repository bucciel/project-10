import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/global.css';

/* import routes for components */
import Header from './components/Header';
// import UserSignUp from './components/UserSignUp';
// import UserSignIn from './components/UserSignIn';
// import UserSignOut from './components/UserSignOut';
// import Courses from './components/Courses';
// import CourseDetail from './components/CourseDetail';
// import CreateCourse from './components/CreateCourse';
// import UpdateCourse from './components/UpdateCourse';

// import Error from './components/Error';
// import Forbidden from './components/Forbidden';
// import NotFound from './components/NotFound';

import withContext from './Context';
// import PrivateRoute from './PrivateRoute';

const HeaderWithContext = withContext(Header);
// const UserSignUpWithContext = withContext(UserSignUp);
// const UserSignInWithContext = withContext(UserSignIn);
// const UserSignOutWithContext = withContext(UserSignOut);
// const CourseDetailWithContext = withContext(CourseDetail);
// const CreateCourseWithContext = withContext(CreateCourse);
// const UpdateCourseWithContext = withContext(UpdateCourse);

/* renders application components and routes */
class App extends Component {

  render() {
    return (
      <Router>
        <div>
          {/* <HeaderWithContext /> */}
          <Route render={({ location }) => <HeaderWithContext location={location.pathname} />} />
          {/* <Switch> 
            <Route exact path="/" component={Courses} />
            <PrivateRoute path="/courses/create" component={CreateCourseWithContext} />
            <PrivateRoute exact path="/courses/:id/update" component={UpdateCourseWithContext} />
            <Route exact path="/courses/:id" component={CourseDetailWithContext} />
            <Route path="/signin" component={UserSignInWithContext} />
            <Route path="/signup" component={UserSignUpWithContext} />
            <Route path="/signout" component={UserSignOutWithContext} /> 
          </Switch> */}
        </div>
      </Router>
    );
  }
}

export default App;
