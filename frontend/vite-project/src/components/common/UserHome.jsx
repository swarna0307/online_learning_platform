/*import React, { useContext, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { UserContext } from '../../App';
import TeacherHome from '../user/teacher/TeacherHome';
import AdminHome from '../admin/AdminHome';
import StudentHome from '../user/student/StudentHome';
// import axiosInstance from './AxiosInstance';

const UserHome = () => {
   const user = useContext(UserContext);
   let content;
   {
      switch (user.userData.type) {
         case "Teacher":
            content = <TeacherHome />
            break;
         case "Admin":
            content = <AdminHome />
            break;
         case "Student":
            content = <StudentHome />
            break;

         default:
            break;
      }
   }

   return (
      <Container>
         {content}
      </Container>
   );
};

export default UserHome;*/

import React, { useContext, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { UserContext } from '../../App';
import TeacherHome from '../user/teacher/TeacherHome';
import AdminHome from '../admin/AdminHome';
import StudentHome from '../user/student/StudentHome';

const UserHome = () => {
   const user = useContext(UserContext);

   useEffect(() => {
      // Debugging: log user data to confirm role assignment
      console.log("User Data:", user);
   }, [user]);

   let content;

   // Render different content based on user type
   switch (user?.userData?.type) {
      case "Teacher":
         content = <TeacherHome />;
         break;
      case "Admin":
         content = <AdminHome />;
         break;
      case "Student":
         content = <StudentHome />;
         break;
      default:
         content = <p>No role assigned or unrecognized role. Please contact support.</p>;
         break;
   }

   return <Container>{content}</Container>;
};

export default UserHome;
