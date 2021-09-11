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
  Link,
  Text,
} from "@chakra-ui/react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { FiZoomIn } from "react-icons/fi";
import { HiOutlineDocumentDownload } from "react-icons/hi";

function ImageViewer({ isOpen, onClose, image, urls, title, imageSubfolder }) {
  const [shownImage, setShownImage] = React.useState(null);

  React.useEffect(() => {
    if (isOpen) {
      setShownImage(urls.indexOf(image));
    }
  }, [isOpen, urls, image]);

  const handleArrowClick = React.useCallback(
    (shift) => {
      let newIdx = shownImage + shift;
      if (newIdx < 0) newIdx = urls.length + newIdx;
      if (newIdx > urls.length - 1) newIdx = urls.length % newIdx;
      setShownImage(newIdx);
    },
    [shownImage, urls.length]
  );

  const pathToImg = `/images/${imageSubfolder ? `${imageSubfolder}/` : ""}${
    urls[shownImage]
  }`;

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="4xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {shownImage !== null && <Image src={pathToImg} alt="Image Preview" />}
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
          <Link
            isExternal
            href={pathToImg}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>
              <FiZoomIn size="30px" color="green.500" />
              <Text display={["none", "block"]}>Смотреть крупнее</Text>
            </Button>
          </Link>
          <Link
            isExternal
            href={pathToImg}
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            <Button>
              <HiOutlineDocumentDownload size="30px" color="green.500" />
              <Text display={["none", "block"]}>Сохранить</Text>
            </Button>
          </Link>
          <Button onClick={() => handleArrowClick(1)}>
            <BiRightArrow size="30px" color="green.500" />
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default ImageViewer;
