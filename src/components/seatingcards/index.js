import React, { Component } from 'react';
import { Statistic } from 'antd';
import { StyledCard, selectedStyle } from './element';

class SeatCard extends Component {
    state = {
        isSeatSelected: false
    }

    _handleOnClick() {
        
        if (this.state.isSeatSelected) {
            this.setState({
                isSeatSelected: false
            });
        } else {
            this.setState({
                isSeatSelected: true
            })
        }
  
    }

    _handleAllClick = (seat) => {
        if (!this.state.isSeatSelected) {
            this.props.handleSeatSelection(seat);
        } else {
            this.props.handleSeatDeselection(seat);
        }
        this._handleOnClick();
    }

    render() {
        const seat = this.props.seatInfo;
        return (
            <div>
                <StyledCard className={this.state.isSeatSelected ? "selected-seat" : null} hoverable size="small" title={'Seat No ' + seat.no} onClick = {() => this._handleAllClick(seat) }>
                <Statistic title={seat.category} value={seat.price} precision={2} />
                </StyledCard>
            </div>
        );
    }
}

export default SeatCard;