import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
class ManageCoursePage extends React.Component {

    constructor (props,context){
        super(props,context);

        this.state = {
            course : Object.assign({},this.props.course),
            error : {}
        }

    }

    render(){

        return(
            <div>
                <h1>Manage Course</h1>

                <form>
                    <div class="form-group">
                        <label for="id">Id:</label>
                        <input type="text" class="form-control" name="id"/>
                    </div>
                    <div class="form-group">
                        <label for="watchHref">Watch Href:</label>
                        <input type="text" class="form-control" name="watchHref"/>
                    </div>
                    <div class="form-group">
                        <label for="title">Title:</label>
                        <input type="text" class="form-control" name="title"/>
                    </div>
                    <button type="submit" class="btn btn-default">Submit</button>
                </form>

            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    let course = {id:'',watchHref:'', title: ''};
    return {
        course : course
    };
}

function mapDispatchToProps(dispatch) {
    return{
        actions : bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);