import {toast} from 'react-toastify'


const successMessage = (message)=>{
    toast.success(message)
}
const infoMessage = (message)=>{
    toast.info(message)
}
const errorMessage = (message)=>{
    toast.error(message, { duration: 3000 })
}

export {
    successMessage,
    infoMessage,
    errorMessage,
}