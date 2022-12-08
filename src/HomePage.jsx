import React, { useEffect, useState } from "react";
import axios from "axios";
import { Layout, Card} from "antd";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const getUsers = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      if (response.status === 200) {
        setUsers(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const navigateToContent = (id) => {
    navigate(`article/${id}`);
  };
  return (
    <>
      <Layout style={{padding: '0px 50px'}}>
        <h1 style={{ borderBottom: "1px solid" }}>Choose Post</h1>
        {users.map((user) => (
          <Card
            onClick={() => {
              navigateToContent(user.id);
            }}
            key={user.id}
          >
            <p>{user.title}</p>
          </Card>
        ))}
      </Layout>
    </>
  );
};

export default HomePage;
