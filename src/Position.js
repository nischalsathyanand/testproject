import React from 'react'
import { Navigate } from 'react-router-dom'
import {
  TableRow,
  TableHeaderCell,
  TableHeader,
  TableCell,
  TableBody,
  Table,
  Button,
} from 'semantic-ui-react'
function Position() {
  const handleBack = () => {}

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
        <TableRow verticalAlign="top">
          <TableCell>Data</TableCell>
          <TableCell>Data</TableCell>
          <TableCell>Data</TableCell>
          <TableCell>Data</TableCell>
          <TableCell>Data</TableCell>
          <TableCell>Data</TableCell>
          <TableCell>Data</TableCell>
          <TableCell>Data</TableCell>
        </TableRow>
      </TableBody>
      <br />

      <div>
        <Button onClick={handleBack}> Back</Button>
      </div>
    </Table>
  )
}

export default Position
