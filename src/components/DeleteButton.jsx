import React from "react";
import { DeleteButtonStyle } from "../styles/deleteButtonStyle";
import { deleteFeed } from "../services/deleteFeed";
import { useNavigate } from "react-router-dom";

const DeleteButton = ({ userInfo }) => {
  const navigate = useNavigate();

  const handleDelete = async () => {
    const isConfirmed = window.confirm("피드가 삭제됩니다. \n정말 삭제하시겠습니까?");
    if (!isConfirmed) return;

    console.log("삭제");
    const response = await deleteFeed(userInfo.id);
    if (response) {
      navigate("/");
    }
  };

  return (
    <div style={{ marginLeft: "auto" }}>
      <DeleteButtonStyle onClick={handleDelete}>삭제하기</DeleteButtonStyle>
    </div>
  );
};

export default DeleteButton;
