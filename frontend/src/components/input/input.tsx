import { ChangeEventHandler } from 'react'

type InputProps = {
  label: string
  id: string
  placeholder: string
  type: 'text' | 'email' | 'password'
  onChange: ChangeEventHandler<HTMLInputElement>
}
const Input = ({ label, id, placeholder, type, onChange }: InputProps) => {
  return (
    <div className="w-full">
      <label htmlFor={id} className="block text-sm/6 font-medium text-gray-900">
        {label}
      </label>
      <div className="mt-2 w-full">
        <input
          type={type}
          name={id}
          id={id}
          placeholder={placeholder}
          required
          className="block w-full rounded-md border-0 py-1.5 pl-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
          onChange={onChange}
        />
      </div>
    </div>
  )
}

export default Input
