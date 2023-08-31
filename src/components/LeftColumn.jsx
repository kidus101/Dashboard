import React from 'react'
import CardItem from './CardItem'
import AreaChartComponent from './AreaChartComponent'
import TableComponent from './TableComponent'

const LeftColumn = () => {
  return (
    <div className='w-full flex flex-col justify-between p-2'>
      <div className='flex flex-col lg:flex-row gap-2 w-full'>
        <p> <CardItem/> </p>
        <p><CardItem/></p>
        <p><CardItem/></p>
      </div>

      <div className='flex-auto w-full'>
        <AreaChartComponent/>
       </div>

    </div>
  )
}

export default LeftColumn