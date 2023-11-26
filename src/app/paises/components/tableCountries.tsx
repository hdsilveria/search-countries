'use client'

import { useState } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Image from 'next/image'
import InfosModal from './infosModal'

export default function TableCountries(props: any){
  const [openModal, setOpenModal] = useState(false)
  const [country, setCountry] = useState({})

  function showInfos(country: any){
    setOpenModal(true)
    setCountry(country)
  }

  function closeModal(){
    setOpenModal(false)
  }

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell align="left">Capital</TableCell>
              <TableCell align="left">Bandeira</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.data && props.data.map((row: any) => (
              <TableRow
                key={row.name.official}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                hover
                onClick={() => showInfos(row)}
              >
                <TableCell 
                  component="th" 
                  scope="row"
                >
                  {row.name.official}
                </TableCell>
                <TableCell align="left">{row.capital[0]}</TableCell>
                <TableCell align="left">
                <Image
                  src={`https://flagcdn.com/${row.cca2.toLowerCase()}.svg`}
                  width={50}
                  height={30}
                  alt={`Bandeira ${row.name.common}`}
                />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <InfosModal 
        open={openModal}
        infos={country}
        onClose={closeModal}
      /> 
    </>
  )
}