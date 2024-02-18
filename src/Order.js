import React, { useState } from 'react'
import {
  FormField,
  Button,
  Dropdown,
  Form,
  Select,
  label,
} from 'semantic-ui-react'
import BuyModal from './BuyModal'
const options = [
  { key: 'angular', text: 'Angular', value: 'angular' },
  { key: 'css', text: 'CSS', value: 'css' },
  { key: 'design', text: 'Graphic Design', value: 'design' },
  { key: 'ember', text: 'Ember', value: 'ember' },
  { key: 'html', text: 'HTML', value: 'html' },
  { key: 'ia', text: 'Information Architecture', value: 'ia' },
  { key: 'javascript', text: 'Javascript', value: 'javascript' },
]
const future = [
  { key: 'angular', text: 'Angular', value: 'angular' },
  { key: 'css', text: 'CSS', value: 'css' },
  { key: 'design', text: 'Graphic Design', value: 'design' },
  { key: 'ember', text: 'Ember', value: 'ember' },
  { key: 'html', text: 'HTML', value: 'html' },
  { key: 'ia', text: 'Information Architecture', value: 'ia' },
  { key: 'javascript', text: 'Javascript', value: 'javascript' },
]
const countryOptions = [
  { key: 'af', value: 'af', text: '1' },
  { key: 'ax', value: 'ax', text: '2' },
  { key: 'al', value: 'al', text: '3' },
  { key: 'dz', value: 'dz', text: '4' },
  { key: 'as', value: 'as', text: '5' },
  { key: 'ad', value: 'ad', text: '6' },
  { key: 'ao', value: 'ao', text: '7' },
  { key: 'ai', value: 'ai', text: '8' },
  { key: 'ag', value: 'ag', text: '9' },
  { key: 'ar', value: 'ar', text: '10' },
]

function Order() {
  const [modalOpen, setModalOpen] = useState(false)
  const toggleModal = () => {
    setModalOpen(true)
  }
  return (
    <Form>
      <FormField>
        <label>Instrument</label>
        <Dropdown
          placeholder="Instruments"
          fluid
          multiple
          selection
          options={options}
        />
      </FormField>
      <FormField>
        <label>Future/Option</label>
        <Dropdown
          placeholder="Future/Option"
          fluid
          multiple
          selection
          options={future}
        />
      </FormField>
      <FormField>
        <label>Lots</label>
        <Select placeholder="Select Lots" options={countryOptions} />
      </FormField>
      <Button type="submit" onClick={toggleModal}>
        Select
      </Button>
      <BuyModal open={modalOpen} />
    </Form>
  )
}

export default Order
