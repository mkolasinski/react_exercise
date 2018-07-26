import React from 'react';


import '../styles/mainPage.css';
import '../assets/js/mainpage.js';
import '../../../node_modules/font-awesome/css/font-awesome.min.css'

class MainPage extends React.Component {
    render() {
        return (
            <div className='page'>
                <div className='popup_contact'>
                    <i className='fa fa-times-circle-o'></i>
                    <form>
                        <input type='text' id='fname' name='firstname' placeholder='Imię...'></input>
                        <input type='text' id='lname' name='lastname' placeholder='Nazwisko...'></input><br/>

                        <textarea name='comment' form='usrform' placeholder="Wpisz wiadomość..."></textarea><br/>

                        <input type='submit' value='Wyślij'></input>
                    </form>
                </div>
                <div className='main_page'>
                    <div className='main_content'>TEXT</div>
                </div>
            </div>
        )
    }
}

export default MainPage;