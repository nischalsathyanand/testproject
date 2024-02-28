import React, { useEffect } from 'react'
import {
    HeaderSubheader,
    HeaderContent,
    TableRow,
    TableHeaderCell,
    TableHeader,
    TableCell,
    TableBody,
    Header,
    Image,
    Table,
} from 'semantic-ui-react'
import { inject, observer } from 'mobx-react';

function BuyOrderPreview({ buyStore,orderCount  }) {
    const handleBack = () => {
        // handle back logic
    };

    useEffect(() => {
        console.log(buyStore)

    },[buyStore])

    return (
        <Table basic='very' celled collapsing hidden={buyStore.orders.length <= 0}>
            <TableHeader>
                <TableRow>
                    <TableHeaderCell>S.No</TableHeaderCell>
                    <TableHeaderCell>Instrument</TableHeaderCell>
                    <TableHeaderCell>Future/Options</TableHeaderCell>
                    <TableHeaderCell>Lot</TableHeaderCell>
                    <TableHeaderCell>CE/PE</TableHeaderCell>
                    <TableHeaderCell>Expiry</TableHeaderCell>
                    <TableHeaderCell>Strike</TableHeaderCell>
                </TableRow>
            </TableHeader>

            <TableBody>

                {buyStore.orders.map((order, index) => (
                    <TableRow key={index} >
                        <TableCell>{index + 1}</TableCell>
                        <TableCell>{order.instruments}</TableCell>
                        <TableCell>{order.future_options}</TableCell>
                        <TableCell>{order.lot}</TableCell>
                        <TableCell>{order.cepe}</TableCell>
                        <TableCell>{order.expiry}</TableCell>
                        <TableCell>{order.strike}</TableCell>
                    </TableRow>
                ))}


            </TableBody>
        </Table>
    );
}

export default inject('buyStore')(observer(BuyOrderPreview));