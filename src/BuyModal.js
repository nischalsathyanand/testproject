import { inject, observer } from 'mobx-react'
import React, { useImperativeHandle, useState,forwardRef } from 'react'

import {
  ModalHeader,
  ModalContent,
  ModalActions,
  Button,
  Modal,
  Label,
  Input,
  GridRow,
  GridColumn,
  Grid,
  Icon
} from 'semantic-ui-react'
import buyStore from './Store/BuyStore'
const BuyModal = forwardRef((props, ref) => {
  const [newOrder, setNewOrder] = useState('')
  const [modalOpen, setModalOpen] = useState(false)
  const [cepe, setCepe] = useState('')
  const [expiry, setExpiry] = useState('')
  const [strike, setStrike] = useState('')
  
  const handleCepe = (e) => {
    setCepe(e.target.value)
  }
  const handleExpiry = (e) => {
    setExpiry(e.target.value)
  }
  const handleStrike = (e) => {
    setStrike(e.target.value)
  }

  useImperativeHandle(ref,() => ({
    handleModal() {
      

      setModalOpen(true)
    
    }

  }))


  const handleLotProperties = () => {
    console.log(cepe + ' ' + expiry + ' ' + strike)
 
    buyStore.orders.push({ ...props.formData, cepe: cepe, expiry: expiry, strike: strike })
    //props.handleStepClick(1)
    setModalOpen(false)
    console.log(buyStore.orders)
    props.toggleOrderCount(buyStore.orders.length)

  }
  return (
    <div>
      <Modal
        size="small"
        open={modalOpen}
      >
        <ModalHeader>Choose Attributes</ModalHeader>
        <ModalContent>
          <Grid>
            <GridRow>
              <GridColumn>
                <Label>Ce/Pe </Label>
                <Input onChange={handleCepe} />
              </GridColumn>
            </GridRow>
            <GridRow>
              <GridColumn>
                <Label>Expiry </Label>
                <Input onChange={handleExpiry} />
              </GridColumn>
            </GridRow>
            <GridRow>
              <GridColumn>
                {' '}
                <Label>Strike </Label>
                <Input onChange={handleStrike} />
              </GridColumn>
            </GridRow>
          </Grid>
        </ModalContent>
        <ModalActions>
          <Button negative onClick={() => setModalOpen(false)}>
            Close
          </Button>
            <Button positive onClick={handleLotProperties}>
              <Icon name = 'thumbs up'/>
            Submit
          </Button>
        </ModalActions>
      </Modal>
    </div>
  )
});

export default inject('buyStore')(observer(BuyModal))
