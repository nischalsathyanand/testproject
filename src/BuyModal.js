import React, { useState } from 'react'

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
const BuyModal = ({ open }) => {
  return (
    <div>
      <Modal
        size="small"
        open={open}
        onClose={() => dispatch({ type: 'close' })}
      >
        <ModalHeader>Are you sure? You want to buy ?</ModalHeader>
        <ModalContent>
          <Grid>
            <GridRow>
              <GridColumn>
                <Label>Ce/Pe </Label>
                <Input disabled value="100" />
              </GridColumn>
            </GridRow>
            <GridRow>
              <GridColumn>
                <Label>Expiry </Label>
                <Input disabled value="20/10/2024" />
              </GridColumn>
            </GridRow>
            <GridRow>
              <GridColumn>
                {' '}
                <Label>Strike </Label>
                <Input disabled value="20" />
              </GridColumn>
            </GridRow>
          </Grid>
        </ModalContent>
        <ModalActions>
          <Button negative onClick={() => dispatch({ type: 'close' })}>
            No
          </Button>
          <Button positive onClick={() => dispatch({ type: 'close' })}>
            Buy
          </Button>
        </ModalActions>
      </Modal>
    </div>
  )
}

export default BuyModal
