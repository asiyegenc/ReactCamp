import React from 'react'
import { Dropdown, Menu, Image, DropdownMenu} from 'semantic-ui-react'

export default function SignedIn(props) {
  return (
    <div>
        <Menu.Item>
         <Image avatar spaced = "right" src="https://image.dummyjson.com/150" Image/>   
        <Dropdown pointing = "top left" text= "Asiye">
            <DropdownMenu>
           <Dropdown.Item text="Bilgilerim" icon="info"/> 
           <Dropdown.Item onClick={props.SignedOut} text="Çıkış yap" icon="sign-out"/>
           </DropdownMenu>
        </Dropdown>
        </Menu.Item>
    </div>
  )
}
