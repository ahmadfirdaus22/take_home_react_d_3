import { Layout, Card } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const InfoPage = () => {
  const param = useParams();
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users/" + param.id
      );
      if (response.status == 200) {
        setUsers(...users, {id: response.data.id, email: response.data.email, phone:  response.data.phone, website: response.data.website, name:response.data.name, username: response.data.username});
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
    console.log(users);
  }, []);
  return (
    <>
      <Layout style={{padding:'0px 50px', height:'100vh'}}>
      <Card>
            <h1>{users.name}</h1>
            <p>{users.email}</p>
            <p>{users.phone}</p>
            <p>{users.website}</p>
            <p>{users.username}</p>
      </Card>
      </Layout>
    </>
  );
};

export default InfoPage;
