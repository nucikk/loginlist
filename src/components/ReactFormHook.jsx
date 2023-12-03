import { useForm } from 'react-hook-form'

const ValidationForm = () => {
   const {register, handleSubmit, formState:{errors}} = useForm()
   return (
         <>
         <input type='text' placeholder='Name'/>
         <input type='email' placeholder='email'/>
         <button type='submit'>შესვლა</button>
         </>
      
   )
}

export default ValidationForm

