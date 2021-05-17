import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  selectCount,
  incrementByAmount,
} from './counterSlice';
import'./Counter.css';
import {data} from './data';
import Card from 'react-bootstrap/Card';
import Navbar from 'react-bootstrap/Navbar';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
export function Counter() {
    const count = useSelector(selectCount);
    console.log(count);
  const dispatch = useDispatch();
 
   
    return (
        <div>
          
           <div className="mainDiv">
            {
                    data.map((data) => (
                        <div >
                        <Card style={{ width: '18rem' }} className="card">
                                <Card.Img variant="top" src={data.imageUrl} />
                                <Card.Title className="cardtitle">{data.title}</Card.Title>
                                <h4>${data.price}</h4>
                                <Card.Body>{data.description}</Card.Body>
                                <Button variant="outline-success" onClick={() => dispatch(increment(data))}>ADD TO CART</Button>{' '}
                            </Card>

                    </div>))
            }
            </div>
            
        </div>
  );
}
