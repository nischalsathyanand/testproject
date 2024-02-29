import React from 'react';
import { inject, observer } from 'mobx-react';
import { TableRow, TableHeaderCell, TableHeader, TableCell, TableBody, Table, Button, Icon } from 'semantic-ui-react';

function Position({ positionStore }) {
  const handleBack = () => {
    // handle back logic
  };

  return (
    <div>
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
        {positionStore.buys.map((order, index) => (
          <TableRow key={index} verticalAlign="top">
            <TableCell>{index + 1}</TableCell>
            <TableCell>test</TableCell>
            <TableCell>{order.expiry}</TableCell>
            <TableCell>{order.lot}</TableCell>
            <TableCell>test</TableCell>
            <TableCell>test</TableCell>
            <TableCell>{order.cepe}</TableCell>
            <TableCell>{order.strike}</TableCell>
          </TableRow>
        ))}
      </TableBody>


    </Table>
          <Button onClick={handleBack}> <Icon name="step backward" />Back</Button>
          </div>
  );
}

export default inject('positionStore')(observer(Position));