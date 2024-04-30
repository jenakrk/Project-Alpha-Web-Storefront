import '../index.css';
import { Dropdown, Button, Modal } from 'react-bootstrap';
import {useState} from'react';
import PaymentInfo from '../Components/PaymentInfo';
export default function CheckOut(props) {
    let total=props.cart.inv.map(item=>item.item.price*item.quantity).reduce((a,b)=>a+b,0).toFixed(2);
    const [payMeth,setPayMeth]=useState({"type":"Select Payment Method","other":""});
    const [showInvoice,setShowInvoice]=useState(false);
    function handleClose(){
        setShowInvoice(false);
        //props.cart.set("all",0);
    }
    function getPayInfo(){
        let type=payMeth.type;
        if (type==="PayPal"){
            return "PayPal "+(document.getElementById("email")?document.getElementById("email").value:"");
        }
        if (type==="Credit Card"){
            return payMeth.other+" ending in "+parseInt((document.getElementById("number")?document.getElementById("number").value:""))%10000
        }
        if (type==="Debit Card"){
            return "Debit Card ending in "+parseInt((document.getElementById("number")?document.getElementById("number").value:""))%10000
        }
        if (type==="Wire Transfer"){
            return "Wire from "+((document.getElementById("bank")?document.getElementById("bank").value:"")) +' ending in '+ parseInt((document.getElementById("number")?document.getElementById("number").value:""))%10000
        }
    }
    return (
        <div className="checkOut">
            <h1>CheckOut</h1>
            <div className="checkOutInner">
                <div className="checkOutReceipt">
                    <h2>Reciept</h2>
                    {props.cart.inv.map(cartItem=><div key={cartItem.item.id}>
                        {cartItem.item.name+
                        '.'.repeat(50-cartItem.item.name.length-cartItem.item.price.toString().length)+
                        (cartItem.item.price * cartItem.quantity).toFixed(2)}
                    </div>)}{(total>0)?(
                        <div>
                            <div>6% Tax{'.'.repeat(50-6-(total*.06).toFixed(2).toString().length)+(total*.06).toFixed(2)}</div>
                            <br/>
                            <div>Total{'.'.repeat(50-5-(total*1.06).toFixed(2).toString().length)+(total*1.06).toFixed(2)}</div>
                        </div>)
                        :
                        (<div>You cannot check out with an empty cart!</div>)
                        
                    }
                </div>
                <div className="checkOutForms">
                    <h2>Checkout Options</h2>
                    <input name="field" id="RN" type="text" placeholder="Recipient Name"></input>
                    <br/>
                    <div className="checkOutPay">
                        <Dropdown>
                            <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                {payMeth.type}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item onClick={
                                    ()=>{
                                        setPayMeth({"type":"PayPal","other":""});
                                    }
                                }>PayPal</Dropdown.Item>
                                <Dropdown.Item onClick={
                                    ()=>{
                                        setPayMeth({"type":"Credit Card","other":""});
                                    }
                                }
                                >Credit Card</Dropdown.Item> 
                                <Dropdown.Item onClick={
                                    ()=>{
                                        setPayMeth({"type":"Debit Card","other":""});
                                    }
                                }
                                >Debit Card</Dropdown.Item>
                                <Dropdown.Item onClick={
                                    ()=>{
                                        setPayMeth({"type":"Wire Transfer","other":""});
                                    }
                                }
                                >Wire Transfer</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <PaymentInfo payMeth={payMeth} setPayMeth={setPayMeth}/>
                        <br/>
                        <h5>Billing Address</h5>
                        <input name="field" id="BA1" type="text" placeholder="Address Line 1"></input>
                        <br/>
                        <input name="field" id="BA2" type="text" placeholder="Address Line 2"></input>
                        <br/>
                        <h5>Shipping Address</h5>
                        <input name="field" id="SA1" type="text" placeholder="Address Line 1"></input>
                        <br/>
                        <input name="field" id="SA2" type="text" placeholder="Address Line 2"></input>
                        <br/>
                        <br/>
                        <Button onClick={()=>setShowInvoice(true)} disabled={total<=0}>Check out!</Button>
                    </div>
                </div>
            </div>
            <Modal show={showInvoice} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Invoice</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="invoiceBody">
                        <div className="invoiceBodyTop">
                            <div className="invoiceBodyTopRow">
                                <h5>Recipient: {document.getElementById("RN")?document.getElementById("RN").value:''}</h5>
                                <h5>Invoice No. {Math.floor(Math.random()*(98760-12345)+12345)}</h5>
                            </div>
                            <div className="invoiceBodyTopRow">
                                <h4>{document.getElementById("BA1")?document.getElementById("BA1").value:''}<br/>{document.getElementById("BA2")?document.getElementById("BA2").value:''}</h4>
                                <h5>{Date().substring(0,21)}</h5>
                            </div>
                            
                        </div>
                        <div className="invoiceBodyMiddle">
                            <h4>grid of expenses</h4>
                        </div>
                        <div className="invoiceBodyBottom">
                            <h5>{getPayInfo()}</h5>
                            <h2>JNN</h2>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="success" onClick={()=>{
                    setShowInvoice(false);
                    props.cart.set("all",0);
                    if(document.getElementsByName("field")) document.getElementsByName("field").forEach(elem=>elem.value='')
                    setPayMeth({"type":"Select Payment Method","other":""});
                }}>
                    Confirm Transaction
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}