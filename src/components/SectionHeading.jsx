import React from 'react'

const SectionHeading = (props) => {
  return (
    <div className="flex w-full max-lg:flex-col max-lg:items-center max-lg:justify-center">
          <div className = 'lg:w-1/3'>
            <h2 className="bg-custom-green px-2 py-1 rounded-md font-bold text-3xl inline-flex">{props.title}</h2>
          </div>
          <div className="lg:ml-[20px] lg:w-2/5 max-lg:mt-8 max-lg:text-center">
            <p>
              {props.text}
            </p>
          </div>
        </div>
  )
}

export default SectionHeading