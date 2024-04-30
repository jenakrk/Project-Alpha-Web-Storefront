import '../index.css';
import { Dropdown } from 'react-bootstrap';
import {useState} from'react';

export default function PaymentInfo(props) {
    const [card,setCard]=useState("Select Card Type");
    if (props.payMeth.type === 'PayPal'){
        return (
            <div>
                <h5>PayPal Info:</h5>
                <input
                    id="email"
                    type="text"
                    placeholder="PayPal Email"
                ></input>
            </div>
        )
    }
    if (props.payMeth.type === 'Credit Card'){
        return (
            <div>
                <h5>Credit Card Info:</h5>
                <input
                    name="field"
                    id="number"
                    type="number"
                    placeholder="Card Number"
                    min="0"
                ></input>
                <input
                    name="field"
                    type="number"
                    placeholder="CVV"
                    min="0"
                    max="999"
                ></input>
                <input
                    name="field"
                    type="month"
                    placeholder="Exp Date"
                    min="2024-04"
                ></input>
                <Dropdown>
                    <Dropdown.Toggle variant="primary" id="dropdown-basic">
                        {card}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item onClick={
                            ()=>{
                                setCard("Master Card");
                                props.setPayMeth({"type":props.payMeth.type,"other":"Master Card"});
                            }
                        }>Master Card</Dropdown.Item>
                        <Dropdown.Item onClick={
                            ()=>{
                                setCard("Discover");
                                props.setPayMeth({"type":props.payMeth.type,"other":"Discover"});
                            }
                        }
                        >Discover</Dropdown.Item> 
                        <Dropdown.Item onClick={
                            ()=>{
                                setCard("Visa");
                                props.setPayMeth({"type":props.payMeth.type,"other":"Visa"});
                            }
                        }
                        >Visa</Dropdown.Item>
                        <Dropdown.Item onClick={
                            ()=>{
                                setCard("American Express");
                                props.setPayMeth({"type":props.payMeth.type,"other":"American Express"});
                            }
                        }
                        >American Express</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        )
    }
    if (props.payMeth.type === 'Debit Card'){
        return (
            <div>
                <h5>Debit Card Info:</h5>
                <input
                    name="field"
                    id="number"
                    type="number"
                    placeholder="Card Number"
                    min="0"
                ></input>
                <input
                    name="field"
                    type="number"
                    placeholder="CVV"
                    min="0"
                    max="999"
                ></input>
                <input
                    name="field"
                    type="month"
                    placeholder="Exp Date"
                    min={Date().split(' ').reverse().slice(5,7).join('-')}
                ></input>
                
            </div>
        )
    }
    if (props.payMeth.type === 'Wire Transfer'){
        return (
            <div>
                <h5>Wire Transfer Info:</h5>
                <input
                    name="field"
                    id="number"
                    type="number"
                    placeholder="Routing Number"
                    min="0"
                ></input>
                <input
                    name="field"
                    id="bank"
                    type="text"
                    placeholder="Bank Name"
                ></input>
            </div>
        )
    }
}