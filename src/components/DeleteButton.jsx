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

    // 로컬 스토리지에서 feeds 가져오기
    const feeds = JSON.parse(localStorage.getItem("feeds")) || {};

    const response = await deleteFeed(userInfo.id);
    if (response) {
      // userInfo.id를 가진 항목 삭제
      if (feeds[userInfo.id]) {
        delete feeds[userInfo.id];
        localStorage.setItem("feeds", JSON.stringify(feeds));
        console.log(`로컬 스토리지에서 ${userInfo.id} 삭제 완료`);
      }
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
