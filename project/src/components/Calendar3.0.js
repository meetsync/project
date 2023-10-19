import React, { useState } from "react"
import { Calendar } from "react-multi-date-picker"

export default function Calender3() {
  const today = new Date()
  const tomorrow = new Date()

  tomorrow.setDate(tomorrow.getDate() + 1)

  const [values, setValues] = useState([today, tomorrow])

  return (
    <Calendar 
      multiple
      value={values} 
      onChange={setValues}
    />
  )
}