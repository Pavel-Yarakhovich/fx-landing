import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Image,
  Button,
} from "@chakra-ui/react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

function ImageViewer({ isOpen, onClose, image, urls, title }) {
  const [shownImage, setShownImage] = React.useState(null);

  React.useEffect(() => {
    if (isOpen) {
      setShownImage(urls.indexOf(image));
    }
  }, [isOpen]);

  const handleArrowClick = React.useCallback((shift) => {
    let newIdx = shownImage + shift;
    if (newIdx < 0) newIdx = urls.length + newIdx;
    if (newIdx > urls.length - 1) newIdx = urls.length % newIdx;
    setShownImage(newIdx);
  }, [shownImage, urls.length]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="4xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {shownImage !== null && (
            <Image src={`/images/${urls[shownImage]}`} alt="Image Preview" />
          )}
        </ModalBody>
        <ModalFooter
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Button onClick={() => handleArrowClick(-1)}>
            <BiLeftArrow size="30px" color="green.500" />
          </Button>
          <Button onClick={() => handleArrowClick(1)}>
            <BiRightArrow size="30px" color="green.500" />
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default ImageViewer;
