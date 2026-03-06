import React from 'react'
import { footerIcons, footerLinks } from '../Constant'

const Footer = () => {
  return (
    <div className='max-w-[1040px] mx-auto py-10 grid grid-cols-1 md:grid-cols-4 '>
        <div className='col-span-1'>
            <p>REACT.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente repellat voluptate doloremque sequi. Molestiae iure voluptas nesciunt, iusto debitis maxime eum dolorum aliquid eveniet.</p>
            <div>
                {
                    footerIcons.map((item) => (
                        <div key={item.id} className='flex gap-2'>
                            {item.icons}
                        </div>
                    ))
                }
            </div>
        </div>
        <div className='col-span-3'>
            {
                footerLinks.map((item, index) => (
                    <div key={item.id}>
                        <p>{item.title}</p>
                        <div>
                            {item.links.map((item) => (
                                <p>{item.linkTitle}</p>
                            ))}
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Footer
