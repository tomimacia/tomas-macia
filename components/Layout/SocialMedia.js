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
    <Flex gap={7} w="100%">
      <Link
        href="https://www.instagram.com/tomimacia"
        rel="noreferred noopener"
        target="_blank"
      >
        <Icon as={BsInstagram} />
      </Link>
      <Link
        href="https://www.twitter.com/tomimacia"
        rel="noreferred noopener"
        target="_blank"
      >
        <Icon as={BsTwitter} />
      </Link>

      <Link
        href="https://wa.me/541161685995"
        rel="noreferred noopener"
        target="_blank"
      >
        <Icon as={BsWhatsapp} />
      </Link>
      <Link
        href="https://www.linkedin.com/in/tom%C3%A1s-eduardo-mac%C3%ADa-14b3a1157/"
        target="_blank"
        rel="noreferred noopener"
      >
        <Icon as={BsLinkedin} />
      </Link>
      <Link
        href="https://github.com/tomimacia/"
        target="_blank"
        rel="noreferred noopener"
      >
        <Icon as={BsGithub} />
      </Link>
    </Flex>
  );
};
