import React from 'react'
import {Container, Row, Col, Card, Table as BTable} from 'react-bootstrap'
import {useTable} from 'react-table';

const Table = props => {
  const products = [];
  const columns = React.useMemo(() => [
    {
      accessor: 'id',
      Header: 'ID'
    },
    {
      accessor: 'address',
      Header: 'Address'
    },
    {
      accessor: 'city',
      Header: 'City, St'
    },
    {
      accessor: 'rating',
      Header: 'Rating'
    },
    {
      accessor: 'visitors',
      Header: 'Total Visitors'
    },
    {
      accessor: 'leads',
      Header: 'Total Leads'
    }
  ], []);

  for (let i = 1; i < 26; i++) {
    const obj = {
      id: i,
      address: "7642 Shalimar St",
      city: "Miramar, FL",
      rating: 4,
      visitors: 23,
      leads: 6
    }
    products.push(obj) 
  }

  // Use the state and functions returned from useTable to build your UI
  const { getTableProps, headerGroups, rows, prepareRow, getTableBodyProps } = useTable({
    columns,
    data : React.useMemo(() => products, []),
  })

  return(
    <Container className="h-100 d-flex flex-column" fluid>
      <Row className="w-100 h-100 overflow-hidden">
        <Card className="mb-1 w-100">
          <BTable className="mb-0 w-100" {...getTableProps}>
            {// Loop over the header rows
            headerGroups.map(headerGroup => (
              // Apply the header row props
              <tr className="d-flex" {...headerGroup.getHeaderGroupProps()}>
                {// Loop over the headers in each row
                headerGroup.headers.map(column => (
                  // Apply the header cell props
                  <th className="flex-grow-1 col" {...column.getHeaderProps()}>
                    {// Render the header
                    column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </BTable>
        </Card>
        <Card className="w-100 h-100 overflow-hidden">
          <Card.Body className="p-0 mb-5 overflow-auto">
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
          </Card.Body>
        </Card>
      </Row>
    </Container>
  )
}

export default Table