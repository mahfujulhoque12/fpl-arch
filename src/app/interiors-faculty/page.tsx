import LivingRoom from '@/components/livingRoom'
import BedRoom from '@/components/bedRoom'
import KitchenResidences from '@/components/kitchenResidences'
import KitchenCommercial from '@/components/kitchenCommercial'
import CorporateOffice from '@/components/corporateOffice'
import OfficeReception from '@/components/officeReception'
import SupperShop from '@/components/supperShop'
import StoreRoom from '@/components/storeRoom'







import React from 'react'

const page = () => {
  return (
    <div>
      <LivingRoom/>
      <BedRoom/>
      <KitchenResidences/>
      <KitchenCommercial/>
      <CorporateOffice/>
      <OfficeReception/>
      <SupperShop/>
      <StoreRoom/>
    </div>
  )
}

export default page