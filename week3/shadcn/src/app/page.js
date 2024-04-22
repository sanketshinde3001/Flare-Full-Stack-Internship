import React from 'react'
import Navbar from '@/components/Navbar'
import { Calendar } from '@/components/ui/calendar'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

import { Separator } from "@/components/ui/separator"
import { SelectDemo } from '@/components/Select'
import { CardDemo } from '@/components/Card1'
import { TabsDemo } from '@/components/Tabs'
import Test from '@/components/ui/Test'
import { TableDemo } from '@/components/Table'
import { PaginationDemo } from '@/components/pagination'



const page = () => {
  return (
    <div className=' w-full'>
     
      {/* <Calendar/> */}
      <Navbar/>
      <Separator />

      <ResizablePanelGroup
      direction="horizontal"
      className="w-full border-b-2"
    >
      <ResizablePanel defaultSize={20} >
        <div className=" h-full flex flex-col items-center justify-evenly gap-7 p-6">
          <SelectDemo/>
          <Test/>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={80} className='flex flex-col items-center justify-evenly'>
        <div className="flex h-full items-center justify-evenly p-6 max-lg:flex-col gap-10">
          <CardDemo/>
          <Calendar/>
          <TabsDemo/>

        </div>
        <div className="flex h-full items-center justify-evenly p-6 max-lg:flex-col gap-10">
          <TableDemo/>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>

    <Separator />
    <PaginationDemo/>
    </div>
  )
}

export default page
