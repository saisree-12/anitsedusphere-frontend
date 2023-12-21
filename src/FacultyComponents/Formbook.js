import React from 'react'
import Input from '../Components/Input'
import Formdescript from '../Components/Formdescript'

const Formbook = () => {
return (
<>   
<div className='h-screen'> 
    <div className='absolute top-0 left-0 flex w-100 flex-col overflow-y-scroll lg:flex-row'>
        <div className='flex flex-col gap-5 py-10 items-center w-full h-screen lg:w-1/2 '>
            <h1 className='text-xl text-center md:text-2xl lg:text-3xl text-black font-bold '>Books / Book Chapters</h1>
            <form className='w-full flex gap-5 flex-col items-center'>
                <Input label='Name of the Faculty' placeholder={'Alice'} type={'text'} isDisable={true}/>
                <Input label='Title of Book / Chapters published' placeholder={''} type={'text'} isDisable={true}/>
                <Input label='Year of publication' placeholder={''} isDisable={false} type={'text'}/>
                <Input label='ISBN/ISSN number of the proceeding' isDisable={false} placeholder={''} type={'text'}/>
                <Input label='Whether at the time of publication Affliating Institution was same Yes/No' placeholder={''} isDisable={false} type={'text'}/>
                <Input label='Name of the publisher' placeholder={''} isDisable={false} type={'text'}/>
                <div className='w-[70%] flex flex-col mt-4 gap-3'>
                    <button type='submit' className='bg-slate-900 h-10 text-white rounded-md'>Submit</button>
                </div>
            </form> 
        </div> 
        <Formdescript describe='Discover the wealth of knowledge generated by our dedicated faculty through their published 
        works in books and book chapters. Our faculty members are actively engaged in cutting-edge research, contributing 
        significantly to their respective fields. Explore the list of publications, including titles, years of publication, 
        ISBN/ISSN numbers, and details about the affiliating institution at the time of publication. This compilation reflects 
        our commitment to fostering a culture of research and academic excellence. Delve into the intellectual achievements of 
        our faculty members and their impactful contributions to the academic community.' 
        title='Faculty Publications: Books and Book Chapters'>
        </Formdescript>
    </div> 
</div>
</>
)}

export default Formbook 