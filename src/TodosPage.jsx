import React, { useEffect, useState } from "react";
import axios from "axios";
import { Layout, Card} from "antd";
import { useNavigate } from "react-router-dom";

const TodosPage = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const getUsers = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
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
    navigate(`detail/${id}`);
  };
  return (
    <>
      <Layout style={{padding: '0px 50px'}}>
        <h1 style={{ borderBottom: "1px solid" }}>Choose Todos</h1>
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

export default TodosPage;
