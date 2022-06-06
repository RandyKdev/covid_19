import React, { useState, useEffect } from 'react';
import Drawer from '../drawer/drawer';
import Main  from '../main section/main';

function Home(){
  const [selected, setSelected] = useState({});
 
    return (
      <div className="Home">
          <Drawer setSelected={setSelected}/>
          <Main selected={selected}/>
      </div>
    );
 
}

export default Home;
