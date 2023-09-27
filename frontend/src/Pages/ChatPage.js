import { Flex } from "@chakra-ui/react"; // Import Flex instead of Box
import { ChatState } from "../Context/ChatProvider";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import MyChats from "../components/MyChats";
import Chatbox from "../components/ChatBox";
import { useState } from "react";

const ChatPage = () => {
  const { user } = ChatState();
  const [fetchAgain, setFetchAgain] = useState(false);

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Flex justifyContent="space-between" w="100%" h="91.5vh" p="10px">
        {user && (
          <div>
            <MyChats fetchAhain={fetchAgain}/>
          </div>
        )}
        {user && (
          <div>
            <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
          </div>
        )}
      </Flex>
    </div>
  );
};

export default ChatPage;
