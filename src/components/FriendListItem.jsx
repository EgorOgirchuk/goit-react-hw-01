import React from "react";
import styles from "./FriendListItem.module.css";
const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={styles.Friend}>
      <span
        className={`${styles.status} ${
          isOnline ? styles.online : styles.offline
        }`}
      ></span>
      <img className={styles.avatar} src={avatar} alt={`${name} avatar`} />
      <div className={styles.info}>
        <p className={styles.name}>{name}</p>
        <p className={isOnline ? styles.onlineText : styles.offlineText}>
          {isOnline ? "Online" : "Offline"}
        </p>
      </div>
    </li>
  );
};

export default FriendListItem;
