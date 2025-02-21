import React, { useEffect } from 'react';
import Chats from '../Components/Chats';
import BodyChat from '../Components/BodyChat';
import Settings from '../Components/Settings';
import '/resources/css/app.css';
import Dialog from '../Components/Dialog';
import { HomeDispatch} from '../Redux/StoreApp';
import { useDispatch} from 'react-redux';
import { fetchUserData } from '../Redux/UserDataSlice';

const Home: React.FC = ({}) => {
  const dispatch = useDispatch<HomeDispatch>();
  useEffect(() => {
    dispatch(fetchUserData());
  }, []);
  return (
    <div>
      <Dialog />
      <Settings />
      <Chats />
      <BodyChat />
    </div>
  );
};

export default Home;
