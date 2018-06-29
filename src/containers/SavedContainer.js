import React from 'react'
import {connect} from 'react-redux'
import {withRouter, history} from 'react-router-dom'
import SavedContent from '../components/SavedContent'
import {filmDataRemove} from "../actions/actions";


class SavedContainer extends React.Component {

    deleteFromSaved = (e) => {
        if (!e.target.name) return
        this.props.delete(+e.target.name)
    }

    render() {
        return <SavedContent
            data={this.props.data}
            deleteFromSaved={this.deleteFromSaved}
        />
    }

}

const mapStateToProps = (state) => {
    return {
        data: state.savedFilms
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        delete: (id) => dispatch(filmDataRemove(id))
    };
};

withRouter(SavedContainer)
export default connect(mapStateToProps, mapDispatchToProps)(SavedContainer)