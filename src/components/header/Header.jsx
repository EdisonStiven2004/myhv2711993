import React from 'react'
import "./header.css"
import fotopersonal from "./fotopersonal.png"
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';



export default function Header() {
  return (
    <div className='header'>
        <div className="headerPhoto">
          <img src={fotopersonal} alt="foto-personal" className={"headerPhotoImg"}/>
        </div>
        <div className="headerNombres">
          <h1>EDISON CHAMORRO </h1>
          <p>TECNOLOGO EN <ALALISI> Y DESARROLLO DE SOFWARE </ALALISI></p>
          <p>....</p>
          <p>...</p>
        </div>
        <div className="headerContacto">
          <ul className='contactList'>
              <li className='contactListItem'><p><SmartphoneIcon/></p>    <p>(+57) 3216325068</p></li>           
              <li className='contactListItem'><p><LocationOnIcon/></p>    <p>Pereira / Risaralda - Colombia</p></li>
              <li className='contactListItem'><p><EmailIcon/></p> <p>edison2004melo@gmail.com</p></li>  
                         
          </ul>
        </div>       
    </div>
  )
}
