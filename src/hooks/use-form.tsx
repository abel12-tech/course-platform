/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

type Props ={
    initialValues:any;
    onSubmit:(form:any) => void;
}

export function useForm({initialValues,onSubmit}: Props){
    const [form,setForm] = useState(initialValues);
    const [isSubmitting,setIsSubmitting] = useState(false)

    const handleChange =(e:any) =>{
       const {name,value} =e.target;
       setForm((prev:any) => ({...prev ,[name]:value}))
    }

    const handleSubmit = (e:any) =>{
        e.preventDefault()
        try{
            setIsSubmitting(true)
            onSubmit(e)
        } catch(error){
            console.error(error)
        }
    }

    return {form ,handleChange ,handleSubmit ,isSubmitting,setIsSubmitting}

}