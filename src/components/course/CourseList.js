import React , {PropTypes} from 'react';
import CourseListRow from './CourseListRow';

const CourseList = ({courses}) => {
    return(
        <table className="table">
            <tr>
                <th>&nbsp;</th>
                <th>Title</th>
                <th>Author</th>
                <th>category</th>
            </tr>
            <tbody>
            {courses.map(course =>
                <CourseListRow key = {course.id} course = {course} />
            )}
            </tbody>
        </table>
    );


};

export default  CourseList;