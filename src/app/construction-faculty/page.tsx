import React from 'react'
import VillageHouse from '../../components/villageHouse';
import SimplexHouse from '../../components/simplexHouse';
import DuplexHouse from '@/components/duplexHouse';
import MultiStoriedHouse from '@/components/multiStoriedHouse';
import Resort from '@/components/resort';
import HotelHouse from '@/components/hotelHouse';
import HouseRanovation from '@/components/houseRanovation';
import BoundaryRenovation from '@/components/boundaryRenovation';





const page = () => {
  return (
    <div>
        <VillageHouse/>
        <SimplexHouse/>
        <DuplexHouse/>
        <MultiStoriedHouse/>
        <Resort/>
        <HotelHouse/>
        <HouseRanovation/>
        <BoundaryRenovation/>
    </div>
  )
}

export default page