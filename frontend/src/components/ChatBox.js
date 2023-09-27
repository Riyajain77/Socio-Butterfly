import { Box } from "@chakra-ui/layout";
//import "./styles.css";
import { ChatState } from "../Context/ChatProvider";
import SingleChat from "./SingleChat";

const Chatbox = ( {fetchAgain,setFetchAgain}) => {
  const { selectedChat } = ChatState();

  return (
    <Box
      d={{ base: selectedChat ? "flex" : "none", md: "flex" }}
      alignItems="center"
      flexDir="column"
      p={3}
      bg="white"
      
      borderRadius="lg"
      borderWidth="1px"
      width="57vw" // Cover around 40% of the screen's width
      minWidth="200px" // Set a minimum width
      height="100%"
      
      display="flex"      
      textAlign="center"
    >
      <SingleChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
    </Box>
  );
};

export default Chatbox;