import React from 'react';
import { useHistory } from "react-router-dom";
import {Navigation} from 'react-minimal-side-navigation';
import { Card, Link } from '@material-ui/core';
//import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';

function SideBar() {
    const history = useHistory();
    return (
      <div >
        <Navigation className="bg-dark text-white"
            // you can use your own router's api to get pathname
            activeItemId="/management/members"
            onSelect={({itemId}) => {
                history.push(itemId);
            }}
            items={[
              {
                title: 'Олон тооны нөхцөл',
                subNav: [
                  {
                    title: 'Ууд',
                    itemId: '/uud',
                  },
                  {
                    title: 'Чууд',
                    itemId: '/uud',
                  },
                  {
                    title: 'Нар',
                    itemId: '/uud',
                  },
                  {
                    title: 'С',
                    itemId: '/uud',
                  },
                  
                ],
              },
                
                
                // you can use your own custom Icon component as well
                // icon is optional
              
             
              {
                title: 'Хэл зүйн ангилал',
                
                subNav: [
                  {
                    title: 'Жинхэнэ нэр',
                    itemId: '/uud',
                  },
                  {
                    title: 'Тэмдэг нэр',
                    itemId: '/uud',
                  },
                  {
                    title: 'Үйл үг',
                    itemId: '/uud',
                  },
                  
                ],
              },
              {
                title: 'Монгол хэлний бүлэг',
                
                subNav: [
                  {
                    title: '1-р бүлэг',
                    itemId: '/mhbuleg/I.12.1',
                  },
                  {
                    title: '2-р бүлэг',
                    itemId: '/mhbuleg/II.7.1',
                  },
                  {
                    title: '3-р бүлэг',
                    itemId: '/mhbuleg/II.6.1',
                  },
                ],
              },
            ]}
          />
      </div>
      
    );
}
export default SideBar;
