import React from 'react';
import './Home.scss';
import Navbar from '../Navbar/Navbar';
import GroupCard from './GroupCard/GroupCard';
import GroupDetails from './GroupDetails/GroupDetails';
import { Button } from 'antd';
import AddGroupDrawer from './AddGroupDrawer/AddGroupDrawer';
import { useState } from 'react';
import { useContext } from 'react';
import { GroupDetailContext } from '../../App';

const Home = () => {
  const {groupDetails} = useContext(GroupDetailContext);
  console.log(groupDetails);

  const [drawerOpen,setDrawerOpen] = useState(false);
  const handleAddGroup = () => {
    setDrawerOpen(true);
  };

  return (
    <div className='home'>
      <Navbar />
      <div className='home_header'>
        <h2>Group</h2>
        <Button type='primary' onClick={() => handleAddGroup()}>Add group</Button>
      </div>
      <div className='home_body'>
        {
          groupDetails.map(val => {
            return <GroupCard value={val} />
          })
        }
      </div>
      {/* <div>
        <GroupDetails />
      </div> */}
      <AddGroupDrawer
        drawerOpen={drawerOpen}
        setDrawerOpen={setDrawerOpen}
      />
    </div>
  )
}

export default Home;