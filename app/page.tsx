"use client";

import React, { useEffect, useState } from "react";
import styles from "./App.module.css";
import data from "../mockup/data.json";

const Home = () => {
  const [time, setTime] = useState(new Date());
  const [updateTime, setUpdateTime] = useState<{
    hour: string;
    minute: string;
  }>({
    hour: `${12 - time.getHours()}`,
    minute: `${60 - time.getMinutes()}`,
  });

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (time.getHours() < 12) {
      setUpdateTime({
        hour: `${11 - time.getHours()}`,
        minute: `${60 - time.getMinutes()}`,
      });
    } else {
      setUpdateTime({
        hour: `${35 - time.getHours()}`,
        minute: `${60 - time.getMinutes()}`,
      });
    }
  }, [time]);

  const dayArr = ["일", "월", "화", "수", "목", "금", "토"];

  const today =
    time.getFullYear() +
    "년 " +
    (time.getMonth() + 1) +
    "월 " +
    time.getDate() +
    "일 " +
    dayArr[time.getDay()] +
    "요일 ";

  return (
    <div className={styles.wrap}>
      <div className={styles.flexBox}>
        <p className={styles.title}>네이버 영화랭킹</p>
        <p className={styles.subTitle}>하루 한번 업데이트</p>
        <p className={styles.subTitle}>17:00 UTC / 12:00 EST / 2:00AM GMT</p>
        <p>
          <strong>
            (현재시간: {today} - {time.toLocaleTimeString()})
          </strong>
        </p>
        <p className={styles.subTitle}>
          <strong>
            (업데이트까지 {updateTime.hour}시간 {updateTime.minute}분
            남았습니다.)
          </strong>
        </p>
      </div>
      {data.length === 0 && <div>데이터가 없습니다</div>}
      <div className={styles.main}>
        <ul>
          {data.map((v: any, i) => {
            return (
              <a href={v.url} target="_blank" className={styles.url} key={i}>
                <li className={styles.content}>
                  <div>
                    {i + 1}: {v.title}
                  </div>
                  <div className={styles.flexRow}>
                    <img
                      src={v.icon}
                      alt=""
                      style={{ height: "13px", marginRight: "0.5rem" }}
                    />
                    <p>{v.range}</p>
                  </div>
                </li>
              </a>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Home;
