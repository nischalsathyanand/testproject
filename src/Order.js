import React, { useEffect, useRef, useState } from 'react'
import {
  FormField,
  Button,
  Dropdown,
  Form,
  Select,
  label,
  Icon,
  Modal,
} from 'semantic-ui-react'
import BuyModal from './BuyModal'
import BuyOrderPreview from './BuyOrderPreview'
import { inject, observer } from 'mobx-react'
import buyStore from './Store/BuyStore'
import positionStore from './Store/PositionStore'

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

function Order({ handleStepClick }) {
  const modelRef = useRef()

  const [orderCount, setOrderCount] = useState(0)

  const [open, setOpen] = useState(false)

  const [formData, setformData] = useState({
    instruments: '',
    future_options: '',
    lot: '',
  })

  const toggleModal = () => {
    modelRef.current.handleModal()
  }

  const handleBuy = () => {
    positionStore.buys.push(...buyStore.orders)
    buyStore.clearOrders()
    console.log(positionStore.buys)
    handleStepClick(1)
  }

  const toggleOrderCount = (count) => {
    setOrderCount(count)

    setformData({
      instruments: '',
      future_options: '',
      lot: '',
    })
  }

  const clearForm = () => {
    setformData({
      instruments: '',
      future_options: '',
      lot: '',
    })

    console.log(buyStore)
  }

  return (
    <div>
      <Form>
        <FormField>
          <label>Instrument</label>
          <Dropdown
            placeholder="Instruments"
            fluid
            selection
            options={options}
            value={formData.instruments}
            onChange={(e, { value }) =>
              setformData({ ...formData, instruments: value })
            }
          />
        </FormField>
        <FormField>
          <label>Future/Option</label>
          <Dropdown
            placeholder="Future/Option"
            fluid
            selection
            options={future}
            value={formData.future_options}
            onChange={(e, { value }) =>
              setformData({ ...formData, future_options: value })
            }
          />
        </FormField>

        <FormField>
          <label>Lots</label>
          <Select
            placeholder="Select Lots"
            options={countryOptions}
            value={formData.lot}
            onChange={(e, { value }) =>
              setformData({ ...formData, lot: value })
            }
          />
        </FormField>

        <BuyModal
          ref={modelRef}
          formData={formData}
          handleStepClick={handleStepClick}
          toggleOrderCount={toggleOrderCount}
        />
        <Button type="submit" onClick={toggleModal} positive>
          Select
        </Button>
        <Button onClick={clearForm}>Clear</Button>
        <Modal
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          size='tiny'
          open={open}
          trigger={
            <Button
              floated="right"
              disabled={buyStore.orders.length <= 0}
              color="linkedin"
            >
              <Icon name="shop" />
              Buy
            </Button>
          }
        >
          <Modal.Header>Confirmation</Modal.Header>
          <Modal.Content>
            <p>Are you sure you want to proceed buying {buyStore.orders.length} item(s) ?</p>
          </Modal.Content>
          <Modal.Actions>
            <Button color="red" onClick={() => setOpen(false)}>
              No
            </Button>
            <Button color="green" onClick={handleBuy}>
              Yes
            </Button>
          </Modal.Actions>
        </Modal>
      </Form>

      <BuyOrderPreview orderCount={orderCount} />
    </div>
  )
}

export default inject('buyStore', 'positionStore')(observer(Order))
