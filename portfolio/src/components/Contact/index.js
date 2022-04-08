import { useEffect, useState, useRef } from 'react'
import { MapContainer as Map, Marker, Popup, TileLayer } from 'react-leaflet'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import emailjs from '@emailjs/browser'
import './index.scss'

const Contact = ()=>{
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef();
    useEffect(()=>{
        setTimeout(()=>{
            setLetterClass('text-animate-hover')
        },3000)
    },[])

    const sendEmail = (e)=>{
        e.preventDefault()
        
        emailjs.sendForm(
            'service_jm1t31g',
            'template_r9zjuuf',
            refForm.current,
            'VYhY6b-5MwKqMibok'
        ).then(()=>{
            alert('Message successfully sent!')
            window.location.reload(false)
        },
        (e)=>{
            console.log(e)
            alert('Failed to send the message, please try again! ')
        })
    }

    return (
        <>
            <div className='container contact-page'>
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters 
                            letterClass = {letterClass}
                            strArray={['C','o','t','a','c','t',' ','m','e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I am interested in freelance opportunities - especially ambitious or
                        large projects. However, if you have other request or question,
                        don't hesitate to contact me using below form either.
                    </p>
                    <div className="contact-form">
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type="text" name="name" placeholder='Name' required/>
                                </li>
                                <li className='half'>
                                    <input type="email" name="email" placeholder='Email' required/>
                                </li>
                                <li>
                                    <input placeholder='Subject' type="text" name='subject' required    />
                                </li>
                                <li>
                                    <textarea placeholder='Message' type="message" name='message' required></textarea>
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value='Send'/>
                                </li>   
                            </ul>
                        </form>
                    </div>
                </div>

                <div className="info-map">
                    Abdelhady Ahmed,
                    <br/>
                    Egypt
                    <br/>
                    Maadi, saqr quresh
                    <br/>
                    <span>a.hadi.1997@gmail.com</span> 
                </div>

                <div className="map-wrap">
                    <Map center={[29.98629795838851, 31.288484633018463]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[29.98629795838851, 31.288484633018463]}>
                            <Popup>I lives here, come over for a cup of coffee :)</Popup>
                        </Marker>
                    </Map>
                </div>
            </div>
            <Loader type='pacman'/>
        </>

    )
}

export default Contact