import React , {PropTypes} from 'react';

const CourseListRow = ({course}) => {
    return(
            <tr>
                <th><a href={course.watchHref} target="_blank" > Watch </a> </th>
                <th>{course.title}</th>
                <th>{course.authorId}</th>
                <th>{course.category}</th>
            </tr>
    );
};

export default  CourseListRow;