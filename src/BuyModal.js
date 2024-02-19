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


  const handleBuy = () => {
    console.log(cepe + ' ' + expiry + ' ' + strike)

    buyStore.orders.push({ cepe: cepe, expiry: expiry, strike: strike })
    setModalOpen(false)
    console.log(buyStore.orders)

  }
  return (
    <div>
      <Modal
        size="small"
        open={modalOpen}
      >
        <ModalHeader>Are you sure? You want to buy ?</ModalHeader>
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
            No
          </Button>
          <Button positive onClick={handleBuy}>
            Buy
          </Button>
        </ModalActions>
      </Modal>
    </div>
  )
});

export default inject('buyStore')(observer(BuyModal))
