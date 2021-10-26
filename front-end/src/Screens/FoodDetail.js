import React, { Component } from "react";
import {
    Navigation,
    Footer
} from '../Components';
import tmpImage from '../assets/hamburger.jpg';
import heartIcon from '../assets/heart.png';
import clockIcon from '../assets/clock.png';
import {
    Link
} from 'react-router-dom'
import { orangeColor } from "../contants";

class FoodDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foodInformation: {}
        }
        this.handleOrder = this.handleOrder.bind(this);
    }

    handleOrder = () => {
        alert('Order');
    }

    mainView = () => {
        return(
            <div style = {{
                height: '520px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <div style = {{
                    display: 'flex',
                    flexDirection: 'row',
                    height: '90%',
                    width: '70%',
                    border: 'solid 0.2px #e6e6e6',
                    boxShadow: '5px 10px 18px #888888',
                    padding: '30px',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>

                    {/* Image of Food Wrapper */}
                    <div>
                        <img style = {{
                            height: '350px',
                            width: '480px',
                            borderRadius: '10px',
                            boxShadow: '5px 10px 18px #888888',
                        }} src = {tmpImage}></img>
                        <p style = {{
                            fontWeight: 'bold',
                            marginTop: '20px'
                        }}>Phí dịch vụ: 0% | Phục vụ bởi NotShopeeFood</p>
                    </div>
                    
                    {/* Information of food wrapper */}

                    <div style = {{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '600px'
                    }}>
                        <div style = {{
                            display: 'flex',
                            flexDirection: 'row'
                        }}>
                            <img style = {{
                                height: '25px',
                                width: '25px',
                                marginRight: '10px'
                            }} src = {heartIcon}></img>
                            <p style = {{
                                color: 'grey'
                            }}>Quán ăn</p>
                        </div>

                        {/* Name of Food Wrapper */}
                        <div style = {{
                            display: 'flex',
                            flexDirection: 'column',
                        }}>
                            <p style = {{
                                fontWeight: 'bold',
                                fontSize: '30px'
                            }}>M.Y.O QUÁN ĂN SIÊU NGON</p>

                            {/* Address */}
                            <p>Số 14, Quản Trọng Hoàng</p>

                            {/* Status */}
                            <div style = {{
                                display: 'flex',
                                flexDirection: 'row',
                            }}>
                                <p style = {{
                                    fontWeight: 'bold',
                                    color: 'green'
                                }}>Còn hàng</p>
                                <img style = {{
                                    height: '20px',
                                    width: '20px',
                                    marginTop: '4px',
                                    marginLeft: '10px'
                                }} src = {clockIcon}></img>
                                <p>7h30 - 20:00</p>
                            </div>
                            
                            {/* Price */}
                            <p style = {{
                                fontSize: '22px',
                                fontWeight: 'bold'
                            }}>30.000 vnđ</p>
                            <button style = {{
                                height: '35px',
                                width: '80%',
                                border: 'solid 0.5px ' + orangeColor,
                                borderRadius: '10px',
                                backgroundColor: orangeColor,
                                color: 'white'
                            }} onClick = {() => {
                                this.handleOrder()
                            }}>Đặt ngay</button>
                        </div>
                    </div>
                </div>
            </div>
        );
        
    }

    render() {
        return(
            <div>
                <Navigation />
                {this.mainView()}
                <Footer />
            </div>
        );
    }
}

export default FoodDetail;