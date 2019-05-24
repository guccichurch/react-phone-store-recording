import React, { Component } from 'react'
import styled from 'styled-components'
import {ProductConsumer} from '../context'
import {ButtonContainer} from './Button'
import {Link} from 'react-router-dom'

export default class Modal extends Component {
  render() {
    return (
        <ProductConsumer>
            {(value) => {
                const {modalOpen, closeModal} = value;
                const {img, title, price} = value.modalProduct;
                if(!modalOpen){
                    return null;
                }
                else{
                    return(
                        <ModalContainer>
                            <div className="container">
                                <div className="row">
                                    <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
                                        <h5>
                                            item added to the cart
                                        </h5>
                                        {/** img-fluid gedeg n zurag containereesee dawah halihiig boliulj baigaa */}
                                        <img src={img} className="img-fluid" alt="product">
                                        </img>
                                        <h5>{title}</h5>
                                        <h5 className="text-muted">
                                            price : $ {price}
                                        </h5>
                                        <Link to='/'>
                                            <ButtonContainer onClick={() => closeModal()}>
                                                store
                                            </ButtonContainer>
                                            
                                        </Link>
                                        {/** ebe yuchbaijbolno gedeg n Button dotroo zaralsan baigaa shalgaj baigaad ongiig n ooroo duudaj baigaa */}
                                        <Link to='/cart'>
                                            <ButtonContainer yuchbaijbolno onClick={() => closeModal()}>
                                                go to cart
                                            </ButtonContainer>
                                            
                                        </Link>
                                    </div>
                                </div>

                            </div>
                        </ModalContainer>
                    );

                }
                return
            }}
        </ProductConsumer>
    )
  }
}
// position top left right bottom 0 gej ogdog n manai modal tuahin page nii buh space iig awah gej ingej ogson

const ModalContainer = styled.div`
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background:rgba(0,0,0,0.3);
    display:flex;
    align-items:center;
    justify-content:center;
    #modal{
        background: var(--mainWhite);
    }

    
`