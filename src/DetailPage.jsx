import { Layout, Card } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailPage = () => {
  const param = useParams();
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/" + param.id
      );
      if (response.status == 200) {
        setUsers(...users, {id: response.data.id, title: response.data.title, status:  response.data.completed});
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
            <h1>{users.title}</h1>
            <p>{users.status == false ? "Not Completed" : "Completed"}</p>
      </Card>
      </Layout>
    </>
  );
};

export default DetailPage;
