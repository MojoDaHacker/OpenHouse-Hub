import React from 'react'
import {Container, Row, Col, Card, Table as BTable} from 'react-bootstrap'
import {useTable} from 'react-table';

const Table = props => {
  const products = props.row;
  const columns = React.useMemo(() => props.col , []);

  // Use the state and functions returned from useTable to build your UI
  const { getTableProps, headerGroups, rows, prepareRow, getTableBodyProps } = useTable({
    columns,
    data : React.useMemo(() => products, []),
  })

  return(
    <Container className="h-100 d-flex flex-column" fluid>
      <Row className="w-100 h-100 overflow-hidden">
          <BTable className="mb-0" {...getTableProps}>
            {// Loop over the header rows
            headerGroups.map(headerGroup => (
              // Apply the header row props
              <tr className="d-flex" {...headerGroup.getHeaderGroupProps()}>
                {// Loop over the headers in each row
                headerGroup.headers.map(column => (
                  // Apply the header cell props
                  <th className="col" {...column.getHeaderProps()}>
                    {// Render the header
                    column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </BTable>
            <BTable className="w-100 h-100">
              {/* Apply the table body props */}
              <tbody className="h-100 overflow-auto" {...getTableBodyProps()}>
                {// Loop over the table rows
                rows.map(row => {
                  // Prepare the row for display
                  prepareRow(row)
                  return (
                    // Apply the row props
                    <tr className="d-flex" {...row.getRowProps()}>
                      {// Loop over the rows cells
                      row.cells.map(cell => {
                        // Apply the cell props
                        return (
                          <td className="flex-grow-1 col" {...cell.getCellProps()}>
                            {// Render the cell contents
                            cell.render('Cell')}
                          </td>
                        )
                      })}
                    </tr>
                  )
                })}
              </tbody>
            </BTable>
      </Row>
    </Container>
  )
}

export default Table