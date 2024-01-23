import UserList from "../components/userList";
import FormUser from "../components/formUser";
import { useEffect, useState } from "react";

const UserPage = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});

  const getUsers = async () => {
    try {
      const response = await fetch("http://localhost:4000/user", {
        method: "GET",
        headers: {
          authorization: localStorage.getItem("token"),
        },
      });
      const users = await response.json();
      setUsers(users);
    } catch (error) {
      console.log("error", error);
    }
  };

  const getUser = async () => {
    try {
      const response = await fetch(`http://localhost:4000/user/${id}`, {
        method: "GET",
        headers: {
          authorization: localStorage.getItem("token"),
        }
      });
      const user = await response.json();
      setUser(user);
    } catch (error) {
      console.log("error", error);
    }
  };

  const deleteUser = async (id) => {
    await fetch(`http://localhost:4000/user/${id}`, {
      method: "DELETE",
      headers: {
        authorization: localStorage.getItem("token"),
      },
    });

    getUsers()
  };

  useEffect(() => {
    getUsers();
  }, []);

  const onEditItem = (id) => {
    getUser('id');
  };
    
  return (
    <>
      <div>
        <h2 className="text-center">Página de Usuarios</h2>

        <FormUser user={user} />
        <UserList users={users} deleteUser={deleteUser} updateUser={onEditItem} />
      </div>
    </>
  );
};

export default UserPage;
