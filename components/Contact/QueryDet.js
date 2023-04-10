import React from 'react'

import Link from 'next/link'

const PhoneNumberDet = () => {
  return (
    <section className="my-5 md:my-0">
      <div className="mb-3">
        <h5 className="tracking-wide text-base font-thin text-[#9b9b9b] heading">
          WANT TO PARTNER
        </h5>
      </div>

      <div className="flex gap-3 flex-col">
        <div>
          <p className="font-bold flex text-lg">
            Reach out to us:&nbsp;
            <Link
              href="mailto:tedx@vit.edu"
              className="hover:text-[#dd1313] flex"
            >
              tedx@vit.edu
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}

export default PhoneNumberDet
