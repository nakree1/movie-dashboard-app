import React from 'react'
import {Link} from 'react-router-dom'
import Rating from "./Rating";
import Money from './Money'
import GenresContainer from "../containers/GenresContainer";
import ExtraDataFilmContainer from "../containers/ExtraDataFilmContainer";
import CreditsContainer from '../containers/CreditsContainer'
import ReviewsContainer from '../containers/ReviewsContainer'
import Loader from './Loader'
import FormatDate from './FormatDate'
import styled from 'styled-components'
import {Row, Col, FluidImage} from '../styled/Layout'
import {GreenButton, RedButton} from '../styled/Buttons'

const BasicBadge = styled.div`
  //float: right;
  font-size: 2rem;
  font-weight: bold;
  padding: 2px 12px;
  line-height: inherit;
  //width: 100px;
  border-radius: 4px;
  background-color: #e95463;
  color: white;
`
const MyHeader = styled.h1`
  display: flex;
  justify-content: space-between;
`

const HeaderWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
`

const DownSection = styled.div`

  height: auto;
`

class FilmContent extends React.Component {
    render() {
        const {data, isLoading, errorMessage, prevUrl = 1, history, isFilmSaved} = this.props
        let saveButton
        if (isFilmSaved) {
            saveButton =
                <button
                    className='btn btn-danger btn-lg w-25 py-2 mb-4'
                    onClick={this.props.unsaveFilm}
                >
                    Unsave
                </button>
        } else {
            saveButton =
                <button
                    className='btn btn-primary btn-lg w-25 py-2 mb-4'
                    onClick={this.props.saveFilm}
                >
                    Save
                </button>
        }

        if (errorMessage.length !== 0) return <div className="alert alert-danger">Error: {errorMessage}</div>
        if (isLoading) return <Loader />

        return (
                <div className="container-fluid my-4">
                    <Row round mb="30px">
                        <Col w="30%" m="10px" loading>
                            <FluidImage
                                src={data.imageLink}
                            />
                        </Col>
                        <Col p="10px">
                            <div>
                                <HeaderWrapper>
                                    <h1>{data.title}</h1>
                                    <Rating basicBadge={true} rate={data.vote_average} />
                                </HeaderWrapper>

                                <h4>{data.tagline}</h4>


                                <GenresContainer genres={data.genres} history={history}/>
                                <FormatDate className="text-muted" date={data.release_date} />
                                <p>{data.overview}</p>



                                {/*<Money budget={data.budget} revenue={data.revenue} />*/}

                            </div>
                            <DownSection>
                                <div className="flex-column d-flex">
                                    {saveButton}
                                    <button className="btn btn-success btn-lg w-25 py-2" onClick={this.props.routeBack}>Back</button>
                                    {/*<GreenButton size={'lg'} onClick={this.props.routeBack}>Test Button</GreenButton>*/}
                                    {/*<RedButton size={'lg'} onClick={this.props.routeBack}>Test Button</RedButton>*/}
                                </div>
                            </DownSection>
                        </Col>
                    </Row>

                    <ExtraDataFilmContainer link={`movie/${data.id}/recommendations`} title='Recommended Films:'/>

                    <ExtraDataFilmContainer link={`movie/${data.id}/similar`} title='Similar Films:'/>

                    <CreditsContainer link={`movie/${data.id}/credits`} title='Credits:' movieId={data.id}/>

                    <ReviewsContainer link={`movie/${data.id}/reviews`} title='Reviews:'/>
                </div>
            )
    }
}


export default FilmContent

