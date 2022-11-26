import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../../contexts/AuthProvider";
import useBuyer from "../../../hooks/useBuyer";
import ConfirmationModal from "../../Shared/ConfirmationModal/ConfirmationModal";
import Spinner from "../../Shared/Spinner/Spinner";

const AdminDashboard = () => {
  const [deletingUser, setDeletingUser] = useState(null);

  const closeModal = () => {
    setDeletingUser(null);
  };

  const { user } = useContext(AuthContext);
  const [isBuyer] = useBuyer(user?.email);

  const {
    data: users = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(
        `https://used-products-resale-server-orpin.vercel.app/users`
      );
      const data = await res.json();
      console.log(data);
      return data;
    },
  });

  const deleteUser = (user) => {
    fetch(
      `https://used-products-resale-server-orpin.vercel.app/users/${user._id}`,
      {
        method: "DELETE",
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          toast.success(`User ${user.name} deleted successfully`);
        }
      });
  };

  const handleMakeAdmin = (id) => {
    fetch(
      `https://used-products-resale-server-orpin.vercel.app/users/admin/${id}`,
      {
        method: "PUT",
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Successfully Make Admin.");
          refetch();
        }
      });
  };

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  return (
    <div>
      <h2>All Users</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Admin Power</th>
              <th>Admin Power</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={user._id}>
                <th>{i + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user?.role}</td>
                <td>
                  {user?.role !== "admin" && (
                    <button
                      onClick={() => handleMakeAdmin(user._id)}
                      className="btn btn-success btn-sm"
                    >
                      Make Admin
                    </button>
                  )}
                </td>
                <td>
                  <button className="btn btn-info btn-sm">Verify</button>
                </td>
                <td>
                  <label
                    onClick={() => setDeletingUser(user)}
                    htmlFor="confirmation-modal"
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deletingUser && (
        <ConfirmationModal
          title={`Are you sure you want to delete ${deletingUser?.name}?`}
          closeModal={closeModal}
          deleteUser={deleteUser}
          modalData={deletingUser}
          successButtonName="Delete"
        ></ConfirmationModal>
      )}
    </div>
  );
};

export default AdminDashboard;
