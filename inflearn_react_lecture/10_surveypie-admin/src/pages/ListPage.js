import { Table } from "antd";
import MainLayout from "../layouts/MainLayout";
import fetcher from "../lib/fetcher";
import useSWR from "swr";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const columns = [
  {
    title: "번호",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "제목",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "생성일",
    dataIndex: "createdAt",
    key: "createdAt",
    render: (createdAt) => {
      const time = new Date(createdAt);
      return `${time.getFullYear()}-${time.getMonth() + 1}-${time.getDate()}`;
    },
  },
  {
    title: "액션",
    dataIndex: "id",
    key: "action",
    render: (id) => {
      return (
        <button
          onClick={() => {
            console.log(id, "삭제");
          }}
        >
          삭제
        </button>
      );
    },
  },
];

function ListPage() {
  //요청 했을때는 undefined
  //시간지나서 받아오면 데이터 가져옴
  //그래서 로그 2개 찍힘
  //주소나 들어가는 값이 바뀌지 않는 이상 계속 호출은 안됨
  //한번만 호출됨 (useEffect 이런거에 넣을 필요 없음)
  const { data, error } = useSWR("/surveys", fetcher);
  console.log("data", data);

  const [page, setPage] = useState(1);

  const navigate = useNavigate();

  if (error) {
    return "error";
  }

  if (!data) {
    return "loading...";
  }

  return (
    <MainLayout selectedKeys={"list"}>
      <Table
        onRow={(record, rowIndex) => {
          return {
            onClick: (event) => {
              navigate(`/builder/${record.id}`);
            },
          };
        }}
        pagination={{ total: data.length, current: page, pageSize: 20 }}
        onChange={(pagination) => {
          console.log(pagination);
          setPage(pagination.current);
        }}
        columns={columns}
        dataSource={data.map((item) => {
          return { ...item, key: item.id };
        })}
      ></Table>
    </MainLayout>
  );
}
export default ListPage;
