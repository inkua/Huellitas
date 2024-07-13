'use client'
import { Accordion, AccordionItem } from "@nextui-org/accordion"

function Accord({ items }) {
    return (
        <Accordion variant="splitted" className="grid outline-none lg:gap-2 px-0 h-full">
            {
                items.map(item => (
                    <AccordionItem
                        key={item.id}
                        title={<h1 className="par-2 text-left px-4 p-auto">{item.title}</h1>}
                        className='w-full flex flex-col justify-center bg-tertiaryColor rounded-3xl shadow-md h-auto'
                        isCompact={true}
                        textValue='question'
                        indicator={({ isOpen }) => (isOpen ? 
                            <svg className="h-6 w-6 text-primaryFont mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <circle cx="12" cy="12" r="10" /> <line x1="8" y1="12" x2="16" y2="12" /></svg> 
                            :<svg className="h-6 w-6 text-primaryFont mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <circle cx="12" cy="12" r="10" />  <line x1="12" y1="8" x2="12" y2="16" />  <line x1="8" y1="12" x2="16" y2="12" /></svg>)}>
                        <p className="p-4 bg-white rounded-3xl par-3 mx-4 mb-4 text-justify">{item.par}</p> 
                    </AccordionItem>
                ))
            }
        </Accordion>
    )
}

export default Accord