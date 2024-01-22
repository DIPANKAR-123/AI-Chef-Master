// eslint-disable-next-line no-unused-vars
import React from 'react'
import { CategoryDishes } from '../../Data/CategoryDishes'
import { ModelData } from '../../Data/ModelData'
import { NavLink } from 'react-router-dom';

import "./DishCategory.css"


const DishCategory = () => {
  return (
    <>
  
      <div className='py-10 bg-[#0B1018]'>
        {/* buttons  */}
        <div className=''>
          <ul className='flex justify-center gap-6 font-medium pt-5'>
            {               
               CategoryDishes.map((item,index,page) => {
                  
                  if (item.page === "/breakfast") {
                     return (
                       <NavLink to="/breakfast" key={index}>
                         <button className='bg-[#717173] text-white p-2 rounded-full px-5  hover:scale-110 hover:bg-red-500  transition-all'>{item.title}</button>
                       </NavLink>
                     );
                   } else {
                     return (
                     <li  key={index}>
                     <button className='bg-[#717173] text-white p-2 rounded-full px-5  hover:scale-110 transition-all'>{item.title}</button>
                   </li>
               )}
         
            })
         }
          </ul>
        </div>

        {/* model section  */}
        <div className='flex items-center justify-center pt-8    '>
         {
            ModelData.map((item,index) => {
                return <NavLink to={item.path} key={index} className=' mr-5 flex items-center justify-center  flex-col   hover:scale-105 transition-all duration-300  '>
                           {/* <div class="card">
            <div class="card__image">
               <img src={item.image} alt="Salad" />
            </div>
            <div className="card__info mt-6">
               <div class="car__info--title">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
               </div>
               <div class="card__info--price">
                 
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
               </div>
            </div>
         </div> */}
         

         {/* card 2 testing  */}
         <div className="cards">
            <div className="card__image">
            </div>
            <div className="card__info mt-6">
               <div class="car__info--title relative">
                  <h3 className='absolute -top-24 text-[3rem]'>{item.title}</h3>
                  <p>{item.description}</p>
               </div>
               
            </div>
         </div>


                       
                        
                      </NavLink>
            })
         }
        
        </div>
        <div className='text-white flex justify-around mt-6 mr-6'>
        <button class="border  h-4 flex items-center justify-center ml-16">
          <a href="#_" class="relative inline-block text-lg group">
            <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
              <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-red-500 group-hover:-rotate-180 ease"></span>
              <span class="relative">Luxury Dishes </span>
            </span>
            <span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
          </a>
        </button>
        <button class="border  h-4 flex items-center justify-center">
          <a href="#_" class="relative inline-block text-lg group">
            <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
              <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-red-500 group-hover:-rotate-180 ease"></span>
              <span class="relative">Quick Dishes </span>
            </span>
            <span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
          </a>
        </button>
        <button class="border  h-4 flex items-center justify-center mr-4">
          <a href="#_" class="relative inline-block text-lg group">
            <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
              <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-red-500 group-hover:-rotate-180 ease"></span>
              <span class="relative">Healthy Dishes</span>
            </span>
            <span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
          </a>
        </button>
            <button class="border h-4 flex items-center justify-center mr-16">
          <a href="#_" class="relative inline-block text-lg group">
            <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
              <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-red-500 group-hover:-rotate-180 ease"></span>
              <span class="relative">Create Dishes</span>
            </span>
            <span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
          </a>
        </button>
         </div>
      </div>
    </>
  )
}

export default DishCategory
