export default function (state = [], action) {

    debugger;

    switch (action.type){
        case "CREATE_COURSE_SUCCESS":
            return action.courses;
        default :
            return state;
    }
}