import { useState } from 'react';
import orderCoverImg from '../../../assets/shop/banner2.jpg'
import Cover from '../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu';
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
const Order = () => {
    const categories = ['salad' , 'pizza', 'soup' , 'dessert', 'drinks'];
    const {category} = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex]= useState(initialIndex);
    const [menu] = useMenu();

  const desserts = menu.filter(item => item.category === 'dessert');
  const soup = menu.filter(item => item.category === 'soup');
  const pizza = menu.filter(item => item.category === 'pizza');
  const salad = menu.filter(item => item.category === 'salad');
  const drinks = menu.filter(item => item.category === 'drinks');
  const popular = menu.filter(item => item.category === 'popular');
    return (
        <div>
             <Helmet>
        <title>Asian Bistro | Order Food</title>
      </Helmet>
           <Cover img={orderCoverImg} title="Order Food"></Cover>
           <Tabs  defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
  <TabList className="text-center mt-5 mb-3 font-bold  border-amber-400">
    <Tab><button className='text-lg rounded p-2 hover:bg-amber-400'>Popular</button></Tab>
    <Tab><button className='text-lg rounded p-2 hover:bg-amber-400'>Salad</button></Tab>
    <Tab><button className='text-lg rounded p-2 hover:bg-amber-400'>Pizza</button></Tab>
    <Tab><button className='text-lg rounded p-2 hover:bg-amber-400'>Soup</button></Tab>
    <Tab><button className='text-lg rounded p-2 hover:bg-amber-400'>Dessert</button></Tab>
    <Tab><button className='text-lg rounded p-2 hover:bg-amber-400'>Drinks</button></Tab>
  </TabList>
  <TabPanel>
  <OrderTab items={popular}></OrderTab>
  </TabPanel>
  <TabPanel>
   <OrderTab items={salad}></OrderTab>
  </TabPanel>
  <TabPanel>
  <OrderTab items={pizza}></OrderTab>
  </TabPanel>
  <TabPanel>
  <OrderTab items={soup}></OrderTab>
  </TabPanel>
  <TabPanel>
  <OrderTab items={desserts}></OrderTab>
  </TabPanel>
  <TabPanel>
  <OrderTab items={drinks}></OrderTab>
  </TabPanel>
  
</Tabs>
        </div>
    );
};

export default Order;