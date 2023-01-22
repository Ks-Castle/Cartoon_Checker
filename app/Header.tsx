"use client";

import React, { useEffect, useState } from "react";

const Header = () => {
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

  return (
    <header className="p-5 bg-blue-300 text-center">
      <p className="text-[2.5rem]">Update Checker</p>
      <p className="subTitle">1시간 마다 업데이트 예정</p>
      <strong>
        (업데이트까지 {updateTime.hour}시간 {updateTime.minute}분 남았습니다.)
      </strong>
    </header>
  );
};

export default Header;
