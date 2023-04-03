const axios = require("axios");
require("dotenv").config();

exports.handler = async (event) => {
  const data = await axios.get(process.env.JSON);
  const TestDiscordChannel = process.env.ADDRESS;

  const filteredData = data.data.filter((v, i) => {
    return (
      v.title.includes("원피스") ||
      v.title.includes("원펀맨") ||
      v.title.includes("피안도") ||
      v.title.includes("켄간") ||
      v.title.includes("식량인류") ||
      v.title.includes("임금님 랭킹") ||
      v.title.includes("스파이 패밀리") ||
      v.title.includes("체인소맨") ||
      v.title.includes("쿠로사와") ||
      v.title.includes("로젠 가르텐")
    );
  });
  const dogAPI = {
    content: "일본만화 업데이트 목록",
    embeds: [
      {
        type: "rich",
        title: "",
        description: "",
        color: 0xb17ce9,
        fields: [
          {
            name:
              filteredData[0].title +
              " " +
              filteredData[0].time[filteredData[0].time.length - 1].split(
                "("
              )[0],

            value: filteredData[0].link,
            inline: false,
          },
          {
            name:
              filteredData[1].title +
              " " +
              filteredData[1].time[filteredData[1].time.length - 1].split(
                "("
              )[0],

            value: filteredData[1].link,
            inline: false,
          },
          {
            name:
              filteredData[2].title +
              " " +
              filteredData[2].time[filteredData[2].time.length - 1].split(
                "("
              )[0],
            value: filteredData[2].link,
            inline: false,
          },
          {
            name:
              filteredData[3].title +
              " " +
              filteredData[3].time[filteredData[3].time.length - 1].split(
                "("
              )[0],
            value: filteredData[3].link,
            inline: false,
          },
        ],
        footer: {
          text: `즐감`,
        },
      },
    ],
  };

  if (event.bot === "dog") {
    const result = await axios.post(TestDiscordChannel, dogAPI);
  }

  const response = {
    statusCode: 200,
    body: JSON.stringify("Hello from Lambda!"),
  };
  return response;
};
