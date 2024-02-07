import { useLocation } from "react-router"

import hcricle from '@/assets/h-circle-4.svg'

import {Banner, Header, Footer} from '@/components'

export const Page = () => {
  const {pathname} = useLocation()

  return (
    <section
      style={{ backgroundColor: '#f7f4e1', backgroundImage: `url(${hcricle})` }}
      className="bg-body bg-no-repeat bg-right-top bg-25">
      <Header />
      <Banner />

      <section className="bg-cream lg:py-20 md:py-16 px-4 py-14 bg-no-repeat bg-[90%_100%] bg-6">
        <div className="container lg:flex lg:items-center">
          <div className="text-center lg:w-1/2 lg:text-left lg:pr-20 pb-10 lg:pb-0">
            <h2 className="lg:pb-5 pb-3">Error</h2>
            <p className="lg:pb-5 pb-2 text-p-2">We couldn't find the page you're looking for at <code>{pathname}</code></p>
          </div>
        </div>
      </section>

      <Footer />
    </section>
  )
}
