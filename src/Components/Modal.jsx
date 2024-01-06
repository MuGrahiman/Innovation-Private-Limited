import React from 'react'

const Modal = React.memo(({children}) => {
  return (
    <div
    class="modal fade"
    data-bs-backdrop="static"
    id="exampleModal"
    tabIndex="1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">

     {children}
    </div>
  </div>
  
  )
})

export default Modal