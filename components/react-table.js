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

    

  return (
    <>
      <div className='grid min-h-screen grid-cols-3 p-16 bg-black'>
        <div className='col-span-1'> 
        &nbsp;
        </div>
        <div className='col-span-1 text-white border border-white-100'> 
        <table>
            <thead>
                <tr>
                    <th>
                        <td className='border border-t-0 border-l-0 border-white-100'>column1</td>
                    </th>
                    <th>
                        <td className='border border-t-0 border-l-0 border-white-100'>column2</td>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className='border border-t-0 border-l-0 border-white-100'>
                        Cell1
                    </td>
                    <td className='border border-t-0 border-l-0 border-white-100'>
                        Cell2
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
        <div className='col-span-1'> 
        &nbsp;
        </div>



      </div>
    </>
  )
}

export default ReactTable
