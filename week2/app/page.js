import Hero from '@/Components/Hero'
import React from 'react'

const page = () => {
  return (
    <section>
      <Hero title={"Title given using Props"} desc={"This is Text given using Props from main page.js to Hero's Page.js"}/>


    </section>
  )
}

export default page
