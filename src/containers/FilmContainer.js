import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {filmDataRemove} from "../actions/actions";
import {fetchDataFilm} from '../actions/fetchData'
import getImageLink from '../actions/getImageLink'
import saveFilm from "../actions/saveFilm";
import FilmContent from "../components/FilmContent";

class FilmContainer extends React.Component {

    componentDidMount() {
        this.props.fetchData((`3/movie/${this.props.match.params.id}`), {
            validateStatus: (status) => {
                return status === 200; // Reject only if (false) the status code is not equal 200
            }
        })
    }

    componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            this.props.fetchData((`3/movie/${this.props.match.params.id}`), {
                validateStatus: (status) => {
                    return status === 200; // Reject only if (false) the status code is not equal 200
                }
            })
        }
    }

    componentWillUnmount() {
        console.log('--unmount film container')
    }


    saveFilm = () => {
        this.props.saveFilm({
            ...this.props.data,
            imageLink: getImageLink(this.props.configApi, this.props.data.poster_path, 'poster', 'w342')
        })
    }

    deleteFromSaved = () => {
        this.props.deleteFilm(this.props.data.id)
    }

    routeBack = () => {
        this.props.history.goBack()
    }

    render() {
        console.log(this.props)
        const data = this.props.data
            ? {...this.props.data, imageLink: getImageLink(this.props.configApi, this.props.data.poster_path, 'poster', 'w342')}
            : null

        return <FilmContent
            isLoading={this.props.isLoading}
            errorMessage={this.props.errorMessage}
            data={data}
            prevUrl={this.props.prevUrl}
            saveFilm={this.saveFilm}
            unsaveFilm={this.deleteFromSaved}
            routeBack={this.routeBack}
            history={this.props.history}
            isFilmSaved={this.props.savedId.includes(data.id)}
        />
    }
}


//получаем стейты в виде пропсов отсюда с редакса
const mapStateToProps = (state) => {
    return {
        isLoading: state.cachedFilm.isLoading,
        errorMessage: state.cachedFilm.errorMessage,
        data: state.cachedFilm.data,
        configApi: state.configApi,
        prevUrl: state.cachedFilms.data.page,
        savedId: state.savedFilms.map((item) => {return item.id})
    }
};

// get callback func from props
const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(fetchDataFilm(url)),
        saveFilm: (data) => dispatch(saveFilm(data)),
        deleteFilm: (id) => dispatch(filmDataRemove(id))
    };
};

withRouter(FilmContainer)
export default connect(mapStateToProps, mapDispatchToProps)(FilmContainer)