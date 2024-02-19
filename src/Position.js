import React from 'react'
import { inject, observer } from 'mobx-react'
import {
  TableRow,
  TableHeaderCell,
  TableHeader,
  TableCell,
  TableBody,
  Table,
  Button,
} from 'semantic-ui-react'

function Position({ buyStore }) {
  const handleBack = () => {
    // handle back logic
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>Sno</TableHeaderCell>
          <TableHeaderCell>Script</TableHeaderCell>
          <TableHeaderCell>Expiry</TableHeaderCell>
          <TableHeaderCell>Lots</TableHeaderCell>
          <TableHeaderCell>Investment</TableHeaderCell>
          <TableHeaderCell>Invested Premium</TableHeaderCell>
          <TableHeaderCell>C premium</TableHeaderCell>
          <TableHeaderCell>Profit/Loss</TableHeaderCell>
        </TableRow>
      </TableHeader>

      <TableBody>
        {buyStore.orders.map((order, index) => (
          <TableRow key={index} verticalAlign="top">
            <TableCell>{index + 1}</TableCell>
            <TableCell>test</TableCell>
            <TableCell>{order.expiry}</TableCell>
            <TableCell>test</TableCell>
            <TableCell>test</TableCell>
            <TableCell>test</TableCell>
            <TableCell>{order.cepe}</TableCell>
            <TableCell>{order.strike}</TableCell>
          </TableRow>
        ))}
      </TableBody>

      <Button onClick={handleBack}>Back</Button>
    </Table>
  )
}

export default inject('buyStore')(observer(Position))
