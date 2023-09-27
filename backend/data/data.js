const chats = [
  {
    isGroupChat: false,
    users: [
      {
        name: "Padmapriya",
        email: "padma@example.com",
      },
      {
        name: "Riya",
        email: "riya@example.com",
      },
    ],
    _id: "617a077e18c25468bc7c4dd4",
    chatName: "Padmapriya",
  },
  {
    isGroupChat: false,
    users: [
      {
        name: "Shreya Patel",
        email: "shreya@example.com",
      },
      {
        name: "Riya",
        email: "riya@example.com",
      },
    ],
    _id: "617a077e18c25468b27c4dd4",
    chatName: "Shreya Patel",
  },
  {
    isGroupChat: false,
    users: [
      {
        name: "Kushagra",
        email: "kushagra@example.com",
      },
      {
        name: "Riya",
        email: "riya@example.com",
      },
    ],
    _id: "617a077e18c2d468bc7c4dd4",
    chatName: "Kushagra",
  },
  {
    isGroupChat: true,
    users: [
      {
        name: "Padmapriya",
        email: "padma@example.com",
      },
      {
        name: "Riya",
        email: "riya@example.com",
      },
      {
        name: "Shreya Patel",
        email: "shreya@example.com",
      },
    ],
    _id: "617a518c4081150716472c78",
    chatName: "Friends",
    groupAdmin: {
      name: "Shreya Patel",
      email: "shreya@example.com",
    },
  },
  {
    isGroupChat: false,
    users: [
      {
        name: "Komal",
        email: "komal@example.com",
      },
      {
        name: "Riya",
        email: "riya@example.com",
      },
    ],
    _id: "617a077e18c25468bc7cfdd4",
    chatName: "Komal",
  },
  {
    isGroupChat: true,
    users: [
      {
        name: "Komal",
        email: "komal@example.com",
      },
      {
        name: "Riya",
        email: "riya@example.com",
      },
      {
        name: "Shreya Patel",
        email: "shreya@example.com",
      },
    ],
    _id: "617a518c4081150016472c78",
    chatName: "Chill Zone",
    groupAdmin: {
      name: "Shreya Patel",
      email: "shreya@example.com",
    },
  },
];

module.exports = { chats };