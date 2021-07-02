import { Button, Fade } from "@chakra-ui/react";
import { BiArrowToTop } from "react-icons/bi";

function toTopButton({ show, handleClick }) {
  return (
    <Fade in={show}>
      <Button
        onClick={handleClick}
        width="65px"
        height="65px"
        borderRadius="50%"
        bg="white"
        boxShadow="0px 5px 6px rgba(0, 0, 0, 0.2), 0px 3px 16px rgba(0, 0, 0, 0.12), 0px 9px 12px rgba(0, 0, 0, 0.14)"
        position="fixed"
        bottom="1rem"
        right="1rem"
      >
        <BiArrowToTop size="60px" color="green.500" />
      </Button>
    </Fade>
  );
}

export default toTopButton;
