import React, { useState, useRef } from "react";
import "App.css";

const UserItem = ({ userItem, onRemove }) => {
  const handleRemove = () => {
    window.confirm(`${userItem.id}번째 정보를 진짜 삭제하시겠습니까?`) && onRemove(userItem.id);
  };
  return (
    <div>
      <div className="UserItem">
        <p>{`${userItem.name}`}</p>
        <p>{`${userItem.age}`}</p>
      </div>
      <button onClick={handleRemove}>삭제하기</button>
    </div>
  );
};

const UserList = ({ userList, onRemove }) => {
  // App의 전체 유저 정보가 담긴 데이터를 가지고 리스트를 만들어줌
  // userList = [{name:"", age:""}, {정보2}..]
  return (
    <div className="UserList">
      {/* userList의 길이만큼 userItem을 만들어야 하니까 map으로 생성 */}
      {userList.map((i) => {
        return <UserItem userItem={i} onRemove={onRemove} key={i.id} />;
      })}
    </div>
  );
};

const UserEditor = ({ onCreate }) => {
  const [users, setUsers] = useState({ name: "", age: "" });
  // 이름과 나이를 입력했을 때
  const handleChangeState = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };
  // 추가하기 버튼을 눌렀을 때
  const handleSubmit = () => {
    onCreate(users);
    setUsers({ name: "", age: "" });
    alert("추가 완료!");
  };
  return (
    <div>
      <div>
        <input name="name" type="text" value={users.name} onChange={handleChangeState} />
        <input name="age" type="text" value={users.age} onChange={handleChangeState} />
      </div>
      <button onClick={handleSubmit}>추가하기</button>
    </div>
  );
};

function App() {
  const [data, setData] = useState([]);

  // 유저 key 생성
  const dataId = useRef(0);

  // 유저 생성
  const onCreate = ({ name, age }) => {
    // UserEditor에서 유저의 이름과 나이를 받으면 그 값으로 App의 data에 추가해주기
    const newData = {
      name,
      age,
      id: dataId.current,
    };
    dataId.current++;
    setData([...data, newData]);
  };
  // 유저 삭제
  const onRemove = (id) => {
    const newUsers = data.filter((i) => i.id !== id);
    setData(newUsers);
  };
  return (
    <div>
      <UserEditor onCreate={onCreate} />
      <UserList userList={data} onRemove={onRemove} />
    </div>
  );
}

export default App;
