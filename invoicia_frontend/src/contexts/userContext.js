import React from "react";

const DUMMY_USER = [
  {
    userID: "@kira",
    name: "Yagami Light",
    email: "deathnote@shinigami.ac.in",
    phoneNo: "897 657 4657",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    userID: "@asd",
    name: "asdsafdsaf",
    email: "sadgfdsgdsfg",
    phoneNo: "654 4567 564",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
];

const UserContext = React.createContext({
  users: DUMMY_USER,
  getProfile: (userID) => {},
});

export const UserContextProvider = (props) => {
  const getProfile = (userID) => {
    return DUMMY_USER.filter((user) =>  user.userID === userID);
  };
  return (
    <UserContext.Provider
      value={{
        users:DUMMY_USER,
        getProfile,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
