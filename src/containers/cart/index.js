import React, { Component } from 'react'
import { Card, Row, Col, Statistic, Button } from 'antd';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import lodash from 'lodash';
import PayOptionsDrawer from '../../components/payoptionsdrawer';

class Cart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            seats: props.seats,
            visible: false
        };
    }
    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    render() {

        const { seats } = this.props;
        console.log('Props -> : ', seats);
        const grouped = lodash.groupBy(seats, seat => seat.category);

        const vip = grouped['VIP'] || [];
        const vvip = grouped['VVIP'] || [];
        const regular = grouped['Regular'] || [];

        const totalVip = vip.length > 0 ? vip.map(seat => Number(seat.price)).reduce((accumulator, price) => {
            return accumulator + price;
        }) : 0;

        const totalVvip = vvip.length > 0 ? vvip.map(seat => Number(seat.price)).reduce((accumulator, price) => {
            return accumulator + price;
        }) : 0;

        const totalRegular = regular.length > 0 ? regular.map(seat => Number(seat.price)).reduce((accumulator, price) => {
            return accumulator + price;
        }) : 0;

        const totalSeatsPrice = totalVvip + totalVip + totalRegular;

        return (
            <Card
                cover={
                    <img
                        alt="example"
                        src={process.env.PUBLIC_URL + '/posters/poster01.jpg'}
                        style={{ height: 400 }}
                    />
                }
            >
                <Row gutter={16}>

                    {
                        vvip.length > 0 ?
                            <Row gutter={24} >
                                <Col span={24}>
                                    <Statistic title={'VVIP x ' + vvip.length} value={vvip[0].price * vvip.length} precision={2} />
                                </Col>

                            </Row> : null
                    }

                </Row>
                <Row gutter={16}>

                    {
                        vip.length > 0 ?
                            <Row gutter={24} >
                                <Col span={24}>
                                    <Statistic title={'VIP x ' + vip.length} value={vip[0].price * vip.length} precision={2} />
                                </Col>

                            </Row> : null
                    }

                </Row>
                <Row gutter={16}>

                    {
                        regular.length > 0 ?
                            <Row gutter={24} >
                                <Col span={24}>
                                    <Statistic title={'Regular x ' + regular.length} value={regular[0].price * regular.length} precision={2} />
                                </Col>

                            </Row> : null
                    }

                </Row>

                {
                    totalSeatsPrice > 0 ?
                        <Row gutter={16} className="mt-10 bt">

                            <Row gutter={24} style={{ marginTop: 20 }}>
                                <Col span={16}>
                                    <Statistic title={'TOTALS (KES)'} value={totalSeatsPrice} precision={2} />
                                </Col>
                                <Col span={8}>
                                    <Button onClick={this.showDrawer} style={{ marginTop: 10 }} type="primary">
                                        Pay
                            </Button>
                                </Col>

                            </Row>
                        </Row> : null
                }


                <PayOptionsDrawer visible={this.state.visible} totals={totalSeatsPrice} onClose={this.onClose}>

                </PayOptionsDrawer>
            </Card>

        );
    }
}

Cart.propTypes = {
    seats: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
    seats: state.movieReducer
});

const mapDispatchToProps = (dispatch) => ({
    // selectSeat: (seat) => dispatch(selectMovieSeat(seat))
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Cart);

