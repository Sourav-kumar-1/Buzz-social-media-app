// const user = Users.filter((u) => u.id === post.userId)[0];
export const Users = [
  {
    id: 1,
    profilePicture: "1.jpeg",
    username: "Shekhar Agarwal",
  },
  {
    id: 2,
    profilePicture: "2.jpeg",
    username: "Janell Shrum",
  },
  {
    id: 3,
    profilePicture: "3.jpeg",
    username: "Alex Durden",
  },
  {
    id: 4,
    profilePicture: "4.jpeg",
    username: "Dora Hawks",
  },
  {
    id: 5,
    profilePicture: "5.jpeg",
    username: "Thomas Holden",
  },
  {
    id: 6,
    profilePicture: "6.jpeg",
    username: "Shirley Beauchamp",
  },
  {
    id: 7,
    profilePicture: "7.jpeg",
    username: "Travis Bennett",
  },
  {
    id: 8,
    profilePicture: "8.jpeg",
    username: "Kristen Thomas",
  },
  {
    id: 9,
    profilePicture: "9.jpeg",
    username: "Gary Duty",
  },
  {
    id: 10,
    profilePicture: "10.jpeg",
    username: "Safak Kocaoglu",
  },
];

export const Posts = [
  {
    id: 1,
    photo: "frontend/src/1.jpeg",
    date: "16 November, 2021",
    userId: 1,
    like: 32,
    dislike: 4,
    comment: 9,
  },
  {
    id: 2,
    photo: "../2.jpeg",
    date: "12 October, 2021",
    userId: 2,
    like: 2,
    dislike: 9,
    comment: 1,
  },
  {
    id: 3,
    photo: "3.jpeg",
    date: "3 December, 2021",
    userId: 3,
    like: 61,
    dislike: 2,
    comment: 2,
  },
  {
    id: 4,
    photo: "./4.avif",
    date: "14 January, 2022",
    userId: 4,
    like: 7,
    dislike: 1,
    comment: 3,
  },
  {
    id: 5,
    photo: "5.jpeg",
    date: "13 July, 2021",
    userId: 5,
    like: 23,
    dislike: 8,
    comment: 5,
  },
  {
    id: 6,
    photo: "6.jpeg",
    date: "8 September, 2021",
    userId: 6,
    like: 44,
    dislike: 5,
    comment: 6,
  },
  {
    id: 7,
    photo: "7.jpeg",
    date: "2 Februrary, 2021",
    userId: 7,
    like: 52,
    dislike: 2,
    comment: 3,
  },
  {
    id: 8,
    photo: "8.jpeg",
    date: "31 March, 2021",
    userId: 8,
    like: 15,
    dislike: 1,
    comment: 1,
  },
  {
    id: 9,
    photo: "9.jpeg",
    date: "5 April, 2022",
    userId: 9,
    like: 11,
    dislike: 3,
    comment: 2,
  },
  {
    id: 10,
    photo: "10.jpeg",
    date: "1 August, 2021",
    userId: 10,
    like: 104,
    dislike: 6,
    comment: 12,
  },
];

export const commentDummyData = [
  {
    id: 1,
    text: "Hello Hello Helloooo",
    date: new Date(),
    user: {
      id: 1,
      username: "Simran",
      profilePicture: `https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80`,
    },
  },
];
