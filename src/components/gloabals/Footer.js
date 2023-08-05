import React from 'react'

function Footer() {
  return (
    <footer>
        <span dangerouslySetInnerHTML={{"__html":"&copy;"}} />{" "} Kunal Prashant {new Date().getFullYear()}
    </footer>
  )
}

export default Footer