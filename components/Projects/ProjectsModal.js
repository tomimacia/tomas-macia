import {  
  Button,
  Flex,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Text,
  chakra,
  shouldForwardProp,
} from "@chakra-ui/react";
import { AnimatePresence, isValidMotionProp, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { ModalArrow } from "./ModalArrow";

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,    
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
  
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    
  }),
};

const swipeConfidenceThreshold = 500;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

export const ProjectsModal = ({ isOpen, imgs, onClose, project }) => {
  const [[page, direction], setPage] = useState([0, 0]);

  const ChakraImg = chakra(motion.img, {
    shouldForwardProp: (prop) =>
      isValidMotionProp(prop) || shouldForwardProp(prop),
  });
  const paginate = (newDirection) => {
    const newPage = page + newDirection;
    let final = 0;
    if (newPage > imgs.length - 1) {
      final = 0;
    } else if (newPage < 0) {
      final = imgs.length - 1;
    } else final = newPage;
    setPage([final, newDirection]);
  };
  return (
    <Modal
      size={["xl","2xl","3xl","3xl"]}
      isCentered
      blockScrollOnMount={false}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton zIndex={10} bg="blackAlpha.600" />
        <ModalBody>
          <Flex
            pos="relative"
            justifyContent="center"
            alignItems="center"
            overflow="hidden"
          >
            <AnimatePresence  initial={false} custom={direction}>
              <ChakraImg
                
                h={['300px','450px','450px','450px']}
                w={['560px','720px','720px','720px']}
                src={imgs[page].src}
                objectFit="center"
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
              />
            </AnimatePresence>
          </Flex>
          <ModalArrow isLeft onClick={() => paginate(-1)} />
          <ModalArrow onClick={() => paginate(1)} />

          <Heading pt={3} pb={3} fontSize="3xl">
            {project.title}
          </Heading>
          <Text>{project.description}</Text>
        </ModalBody>

        <ModalFooter>
          <Flex gap={3}>
            <Button
              size={["xs", "xs", "sm", "sm"]}
              as={Link}
              target="blank"
              rel="noreferred noopener"
              href={project.source.href}
            >
              {project.source.button}
            </Button>
            <Button
              bg="blue.400"
              _hover={{ bg: "blue.200" }}
              size={["xs", "xs", "sm", "sm"]}
              as={Link}
              target="blank"
              rel="noreferred noopener"
              href={project.site.href}
            >
              {project.site.button}
            </Button>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
