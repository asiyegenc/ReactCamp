import React from 'react'
import { Button } from 'semantic-ui-react'

export default function SignedOut({SignedIn}) {
  return (
    <div>
        <Button primary onClick={SignedIn}> Giriş yap </Button>
        <Button primary style={{marginLeft:'0.5em'}}> Kayıt ol </Button>
    </div>
  )
}
