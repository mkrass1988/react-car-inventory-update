import Button from "./Button"
import Input from "./Input"
import { useState } from "react"

import { useForm } from 'react-hook-form'
import { server_calls } from "../api/server"
import { useDispatch, useStore } from "react-redux"
import { chooseColor, chooseMake, chooseModel, chooseYear } from "../redux/slices/RootSlice"

interface ContactFormProps {
  id?: string[]
}

const ContactForm = ( props:ContactFormProps) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();

  let [ open, setOpen ] = useState(false);

  open = open
    const handleClose = () => {
        setOpen(false)
        setTimeout( () => {window.location.reload()}, 500)
    }

  const onSubmit = (data: any) => {
    console.log(`ID: ${typeof props.id}`);
    console.log(props.id)
    console.log(data)
    if (props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data)
      console.log(`Updated: ${ data.first } ${ props.id }`)
    } else {
      dispatch(chooseMake(data.make));
      dispatch(chooseModel(data.model));
      dispatch(chooseYear(data.year));
      dispatch(chooseColor(data.color));

      server_calls.create(store.getState())
    }
  }

  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="make">Make</label>
                <Input {...register('make')} name='make' placeholder="Make" />
            </div>
            <div>
                <label htmlFor="model">Model</label>
                <Input {...register('model')} name='model' placeholder="Model" />
            </div>
            <div>
                <label htmlFor="year">Year</label>
                <Input {...register('year')} name='year' placeholder="Year" />
            </div>
            <div>
                <label htmlFor="color">Color</label>
                <Input {...register('color')} name='color' placeholder="Color" />
            </div>
            <div className="flex p-1">
            <Button className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white"
            onClick={handleClose}
            >
                Submit
            </Button>
            </div>
        </form>
    </div>
  )
}

export default ContactForm