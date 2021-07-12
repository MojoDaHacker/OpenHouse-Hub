import React from 'react'
import {Container, ListGroup} from 'react-bootstrap'
import {useTable} from 'react-table';

const Table = props => {
  const products = props.row;
  const columns = React.useMemo(() => props.col , []);

  // Use the state and functions returned from useTable to build your UI
  const { getTableProps, headerGroups, rows, prepareRow, getTableBodyProps } = useTable({
    columns,
    data : React.useMemo(() => products, []),
  })

  console.log(headerGroups)

  return(
    <Container className="pb-0 h-100 overflow-hideen" fluid>
      <ListGroup className="h-100 d-flex flex-column">
          {headerGroups.map(val => (
            <ListGroup.Item as="header" className="d-flex flex-row px-0" style={{display: "table-row"}}>
              {val.headers.map(col => (
                <div className="col" style={{display: "table-cell"}}>{col.render("Header")}</div>
              ))}
            </ListGroup.Item>
          ))}
          <div {...getTableBodyProps()} className="d-flex flex-column overflow-auto" style={{display: "table-body"}}>
            {rows.map((row, i) => {
              prepareRow(row)
              return (
                <ListGroup.Item className="d-flex px-0" {...row.getRowProps()} style={{display: "table-row"}}>
                  {row.cells.map(cell => <div className="col" {...cell.getCellProps()}>{cell.render('Cell')}</div>)}
                </ListGroup.Item>
              )
            })}
          </div>
      </ListGroup>
    </Container>
  )
}

export default Table