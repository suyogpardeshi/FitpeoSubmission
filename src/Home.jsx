import React from 'react'

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Sector  } from 'recharts';
import {
  BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill,
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill, Bs0Square
} from 'react-icons/bs'

import photo1 from "../src/assets/bag.png"
import photo2 from "../src/assets/dollar.png"
import photo3 from "../src/assets/earning.png"
import photo4 from "../src/assets/documentttts.png"



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

  const data01 = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
    { name: 'Group E', value: 278 },
    { name: 'Group F', value: 189 },
  ];

  return (
        <main className='main-container'>

          <div className='main-cards'>
              <div class="card">
                <table>
                  <tr>
                    <td><img className='card-icon' src={photo2} /></td>
                    <td>
                        <h6 className='card-text1'>Earning</h6>
                        <h2>$198k</h2>
                        <h6 className='card-text2'><span className='card-text-main'>37.8%</span> this month</h6>
                    </td>
                  </tr>
                </table>
          </div>     

            <div class="card">
                <table>
                  <tr>
                    <td><img className='card-icon' src={photo4} /></td>
                    <td>
                        <h6 className='card-text1'>Orders</h6>
                        <h2>$2.4k</h2>
                        <h6 className='card-text2'><span className='card-text-main-pink'>2%</span> this month</h6>
                    </td>
                  </tr>
                </table>
            </div>   

            <div class="card">
                <table>
                  <tr>
                    <td><img className='card-icon' src={photo3} /></td>
                    <td>
                        <h6 className='card-text1'>Balance</h6>
                        <h2>$2.4k</h2>
                        <h6 className='card-text2'><span className='card-text-main-pink'>2%</span> this month</h6>
                    </td>
                  </tr>
                </table>
            </div>

            <div class="card">
                <table>
                  <tr>
                    <td><img className='card-icon' src={photo1} /></td>
                    <td>
                        <h6 className='card-text1'>Total Sales</h6>
                        <h2>$89k</h2>
                        <h6 className='card-text2'><span className='card-text-main'>11%</span> this week</h6>
                    </td>
                  </tr>
                </table>
            </div>
            
          </div>

          <div className='charts'>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart width={150} height={40} data={data}>
                <Bar dataKey="uv" fill="#8884d8" />
              </BarChart>


              {/* <PieChart width={400} height={400}>
                <Pie
                  dataKey="value"
                  isAnimationActive={false}
                  data={data01}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  label
                />
                <Pie dataKey="value" data={data02} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" />
                <Tooltip />
              </PieChart> */}

            </ResponsiveContainer>


          </div>



        </main>
  )
}

export default Home