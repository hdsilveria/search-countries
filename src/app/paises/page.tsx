import React from 'react'
import countriesService from './services/index'
import TableCountries from './components/tableCountries'

const service = new countriesService()

async function getData() {
  return service.getCountries().then(res => res.data)
}

export default async function CountriesComponent(){
  const data = await getData()

  return (
    <main>
      <h1>Lista de Países</h1>
      <TableCountries data={data} />
    </main>
  )
}