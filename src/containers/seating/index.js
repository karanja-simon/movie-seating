import React, { Component } from 'react';
import { Row, Col } from 'antd';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import lodash from "lodash";
import SeatCard from '../../components/seatingcards';
import { selectMovieSeat, deSelectMovieSeat } from './action';
import { seats } from './assets/seats';

class MovieSeating extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    _handleMovieSeatSelection = (seat) => {
        this.props.selectSeat(seat);
    }

    _handleMovieSeatDeselection = (seat) => {
        this.props.deSelectSeat(seat);
    }

    render() {
        const grouped = lodash.groupBy(seats, seat => seat.category);

        const vip = grouped['VIP'];
        const vvip = grouped['VVIP'];
        const regular = grouped['Regular'];

        const width = Number(24 / 6);
        return (<div>

            <Row gutter={24} className="mb-20">
                {
                    vvip.map((seat) => (
                        <Col key={seat.id} xs={24} sm={24} md={width} lg={width} xl={width} xxl={width}>
                            <SeatCard
                                seatInfo={seat}
                                handleSeatSelection={this._handleMovieSeatSelection}
                                handleSeatDeselection={this._handleMovieSeatDeselection}
                            />
                        </Col>
                    ))
                }
            </Row>

            <Row gutter={24} className="mb-20">
                {
                    vip.map((seat) => (
                        <Col key={seat.id} xs={24} sm={24} md={width} lg={width} xl={width} xxl={width}>
                            <SeatCard
                                seatInfo={seat}
                                handleSeatSelection={this._handleMovieSeatSelection}
                                handleSeatDeselection={this._handleMovieSeatDeselection}
                            />
                        </Col>
                    ))
                }
            </Row>

            <Row gutter={24} className="mb-20">
                {
                    regular.map((seat) => (
                        <Col key={seat.id} xs={24} sm={24} md={width} lg={width} xl={width} xxl={width}>
                            <SeatCard
                                seatInfo={seat}
                                handleSeatSelection={this._handleMovieSeatSelection}
                                handleSeatDeselection={this._handleMovieSeatDeselection}
                            />
                        </Col>
                    ))
                }
            </Row>
        </div>
        );
    }
}

MovieSeating.propTypes = {
    selectSeat: PropTypes.func.isRequired,
    deSelectSeat: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    seats: state.movieReducer.seats
});

const mapDispatchToProps = (dispatch) => ({
    selectSeat: (seat) => dispatch(selectMovieSeat(seat)),
    deSelectSeat: (seat) => dispatch(deSelectMovieSeat(seat))
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(MovieSeating);