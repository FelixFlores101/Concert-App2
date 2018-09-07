import React from 'react'
import './App.css'


export default class Item extends React.Component {
    constructor() {
        super()
        this.state = {
    
        }
    }
    render() {
        return (
            <div className='item'>
                <h5 className='item-title'>Name of Band</h5>
                <i className='far fa-address-card"'></i>
                <div className='item-info'>
                    <h6 className='muted'>Venue</h6>
                    <h6 className='muted'>Date</h6>
                </div>
                <div className='comments'>
                    <h5 className='comment-title'>Add A Comment</h5>
                    <form>
                        <textarea placeholder='Type your comment out' max='500'></textarea>
                    </form>
                </div>
            </div>
        )
    }
}
