import React, { useEffect, useState } from "react";
import axios from "axios";
import { Layout, Card} from "antd";
import { useNavigate } from "react-router-dom";

const UserPage = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const getUsers = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (response.status === 200) {
        setUsers(response.data);
      }
      console.log(response.data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const navigateToContent = (id) => {
    navigate(`info/${id}`);
  };
  return (
    <>
      <Layout style={{padding: '0px 50px'}}>
        <h1 style={{ borderBottom: "1px solid" }}>Choose Users</h1>
        {users.map((user) => (
          <Card
            onClick={() => {
              navigateToContent(user.id);
            }}
            key={user.id}
          >
            <p>{user.name}</p>
          </Card>
        ))}
      </Layout>
    </>
  );
};

export default UserPage;
