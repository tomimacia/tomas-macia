import { Flex, Icon } from "@chakra-ui/react";
import Link from "next/link";
import { SocialMediaData } from "../../data/SocialMediaData";

export const SocialMedia = () => {
  return (
    <Flex gap={7} w="100%">
      {SocialMediaData.map((media, i) => {
        const { href, title, icon } = media;
        return (
          <Link
            key={title+"Icon"}
            title={title}
            href={href}
            rel="noreferred noopener"
            target="_blank"
          >
            <Icon as={icon} />
          </Link>
        );
      })}
    </Flex>
  );
};
