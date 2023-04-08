import React, { useEffect } from 'react'
import fakeData from "../lib/MOCK_DATA.json"
import { useTable } from 'react-table'

const ReactTable = () => {

    useEffect(()=>{
        console.log(fakeData)
    })

    const data = React.useMemo(()=>fakeData,[])
    const columns = React.useMemo(
        ()=>[
            {Header: "ID",
        accessor:"id"},
            {Header: "First Name",
        accessor:"first_name"},
        {
            Header: "Last Name",
            accessor: "last_name",
          },
          {
            Header: "Email",
            accessor: "email",
          },
          {
            Header: "Gender",
            accessor: "gender",
          },
          {
            Header: "University",
            accessor: "university",
          }


        ],[]
    )

    const {getTableBodyProps, getTableProps, headerGroups,rows,prepareRow } = useTable({columns, data});

    const jamesTable = ()=>{
      return(
        <table className='text-white border normal border-white-100'>
          
            <thead>
                <tr>
                    <th>
                        <td className='border border-t-0 border-l-0 border-r-1 border-white-100'>Cell</td>
                    </th>
                    <th>
                        <td className='border border-t-0 border-l-0 border-r-1 border-white-100'>Cell</td>
                    </th>
                    <th>
                        <td className='border border-t-0 border-l-0 border-r-1 border-white-100'>Cell</td>
                    </th>
                    <th>
                        <td className='border border-t-0 border-l-0 border-r-1 border-white-100'>Cell</td>
                    </th>
                    <th>
                        <td className='border border-t-0 border-l-0 border-r-1 border-white-100'>Cell</td>
                    </th>
                    <th>
                        <td className='border border-t-0 border-l-0 border-r-1 border-white-100'>Cell</td>
                    </th>


                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className='border border-t-0 border-l-0 border-r-1 border-white-100'>
                        Cell
                    </td>
                    <td className='border border-t-0 border-r-0 border-l-1 border-white-100'>
                      Cell
                    </td>
                    <td className='border border-t-0 border-r-0 border-l-1 border-white-100'>
                        Cell
                    </td>
                    <td className='border border-t-0 border-white-100'>
                        Cell
                    </td>
                    <td className='border border-t-0 border-white-100'>
                        Cell
                    </td>
                    <td className='border border-t-0 border-white-100'>
                        Cell
                    </td>
                </tr>
                <tr>
                    <td className='border border-t-0 border-white-100'>
                        Cell
                    </td>
                    <td className='border border-t-0 border-white-100'>
                        Cell
                    </td>
                    <td className='border border-t-0 border-white-100'>
                        Cell
                    </td>
                    <td className='border border-t-0 border-white-100'>
                        Cell
                    </td>
                    <td className='border border-t-0 border-white-100'>
                        Cell
                    </td>
                    <td className='border border-t-0 border-white-100'>
                        Cell
                    </td>
                </tr>
            </tbody>
            
        </table>
      )
    }
    

  return (
    <>

<div className="App">
      <div className="container">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column, index) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()} >
            { rows.map((row) =>{

              prepareRow(row);
              return(
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell)=>{
                    <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
                  })}

                </tr>
              )
            })

            }
          </tbody>


</table>
          </div>
          </div>
          </>
  )
}

  {/* <div className='container'>

    <table {...getTableProps()} >
      <thead>
        {headerGroups.map((headerGroup) =>{
          <tr {...headerGroup.getHeaderGroupProps()} > 
        {headerGroup.headers.map((column)=>{
         <th {...column.getHeaderProps()}>
          {column.render("Header")}
          </th>
        })}
          </tr>
        })}
      </thead>

    </table>


  </div> */}






      


export default ReactTable
