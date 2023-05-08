import { Flex, Icon } from "@chakra-ui/react";
import Link from "next/link";
import {
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsWhatsapp,
} from "react-icons/bs";

export const SocialMedia = () => {
  return (
    <Flex gap={2} w="100%">
      <Link
        href="https://www.instagram.com/tomimacia"
        rel="noreferred noopener"
        target="_blank"
      >
        <Icon as={BsInstagram} ml={5} />
      </Link>
      <Link
        href="https://www.twitter.com/tomimacia"
        rel="noreferred noopener"
        target="_blank"
      >
        <Icon as={BsTwitter} ml={5} />
      </Link>

      <Link
        href="https://wa.me/541161685995"
        rel="noreferred noopener"
        target="_blank"
      >
        <Icon as={BsWhatsapp} ml={5} />
      </Link>
      <Link
        href="https://www.linkedin.com/in/tom%C3%A1s-eduardo-mac%C3%ADa-14b3a1157/"
        target="_blank"
        rel="noreferred noopener"
      >
        <Icon as={BsLinkedin} ml={5} />
      </Link>
      <Link
        href="https://github.com/tomimacia/"
        target="_blank"
        rel="noreferred noopener"
      >
        <Icon as={BsGithub} ml={5} />
      </Link>
    </Flex>
  );
};
