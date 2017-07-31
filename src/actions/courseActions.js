import courseApi from '../api/mockCourseApi';

export function loadCoursesSuccess (courses) {
    debugger;
    return {type : "CREATE_COURSE_SUCCESS", courses}
}

export function loadCourses() {
    debugger;
    
    return function (dispatch) {
        return courseApi.getAllCourses().then(courses =>{
                dispatch(loadCoursesSuccess(courses));
            }).catch(error =>{
                throw (error);
        });
    }
    
}