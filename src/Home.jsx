import React from 'react'

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Sector  } from 'recharts';
import {
  BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill,
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill, Bs0Square
} from 'react-icons/bs'

import photo1 from "../src/assets/bag.png"


const Home = () => {

  // Bar-data
  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,

    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  






  return (
    <main className='main-container'>

      <div className='main-cards'>
        <div className='card'>
          <div className='card-inner'>
            <h3>Products</h3>
            <BsFillArchiveFill className='card_icon' />
          </div>
          <h1>300</h1>
        </div>

        <div className='card'>
          <div className='card-inner'>
            <h3>Categories</h3>
            <BsFillGrid3X3GapFill className='card_icon' />
          </div>
          <h1>15</h1>
        </div>

        <div className='card'>
          <div className='card-inner'>
            <h3>Customer</h3>
            <BsPeopleFill className='card_icon' />
          </div>
          <h1>36</h1>
        </div>

        < div className='card'>


          {/* <div className='card-photo'>
            <img src="AdminPanel\src\assets\bag.png" />
          </div>

          <div className='card-decs'>
            <h6>Total Sales</h6>
            <h3>$89k</h3>
            <h5>11% this week</h5>
          </div> */}

            
              {/* <div className='card-inner'>
                <img className='card-icon' src={photo1} />
              </div>

               <h6>Total Sales</h6>
               <h3>$89k</h3>
               <h5>11% this week</h5> */}
               
               <div className='card-inner'>
               <img className='card-icon' src={photo1} />
            
               </div>

               <div className='card-pic'> 
                 
                 <h1>36</h1>
               </div>
               <h1>366</h1>
               
            


        </div>
      </div>

      <div className='charts'>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart width={150} height={40} data={data}>
            <Bar dataKey="uv" fill="#8884d8" />
          </BarChart>

          
        </ResponsiveContainer>


      </div>



    </main>
  )
}

export default Home