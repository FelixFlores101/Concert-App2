import React from 'react';
import './App.css';



export default class Item extends React.Component {
    constructor() {
        super()
        this.state = {
    
        }
    }

    handleEdit() {
        
    }

    handleDelete() {
        // this.deleteEvent()
        var conf = window.confirm(`Are you sure you want to delete the event with the id of ${this.props.event.id}`)
        if(!conf) {
            // Do Nothing            
        } else {
            let xhr = new XMLHttpRequest()
            xhr.open('delete', `http://localhost:3000/events/${this.props.event.id}`,true)
            xhr.onload = () => {
                console.log('Event Deleted')
                alert('Event Deleted')
            }
            xhr.send()
        }
    }



    render() {
        return (
            <div className='item'>
                <div className='item-title'>
                    <h5>{this.props.event.band_name}</h5>
                    <button onClick={this.handleEdit.bind(this)}>Edit</button>
                    <button onClick={this.handleDelete.bind(this)}>Delete</button>
                </div>
                <div className='item-info'>
                    <h6 className='muted'>{this.props.event.place}</h6>
                    <h6 className='muted'>{this.props.event.date}</h6>
                </div>
                <div className='comments'>
                    <h5 className='comment-title'>Add A Comment</h5>
                    <form>
                        <textarea placeholder='Type your comment out' maxLength='450'></textarea>
                    </form>
                </div>
            </div>
        )
    }
}
