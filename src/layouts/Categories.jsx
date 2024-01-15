import React from 'react'
import { Menu} from 'semantic-ui-react'

export default function Categories() {
  return (
    <div>
         <Menu vertical>
        <Menu.Item
          name='inbox'
        />

        <Menu.Item
          name='spam'
        />

        <Menu.Item
          name='updates'
        />
      </Menu>
    </div>
  )
}
