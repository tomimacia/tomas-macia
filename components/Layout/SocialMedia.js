import { Flex, Icon, Text } from "@chakra-ui/react";
import Link from "next/link";
import { SocialMediaData, MailData } from "../../data/SocialMediaData";
import { useLanguage } from "../../context/languageContext";

export const SocialMedia = () => {
  const language = useLanguage();
  return (
    <Flex mt={2} w="100%" align="center" justify="space-between">
      <Flex gap={7}>
        {SocialMediaData.map((media, i) => {
          const { href, title, MediaIcon } = media;
          return (
            <Link
              href={href}
              key={title + "Icon"}
              rel="noreferred noopener"
              target="_blank"
            >
              <MediaIcon title={title} cursor="Pointer" />
            </Link>
          );
        })}
      </Flex>
      <Flex align="center" gap={2}>
        <Link href={MailData.href} rel="noreferred noopener" target="_blank">
          <MailData.MediaIcon title={MailData.title} cursor="pointer" />
        </Link>

        <Text>
          {MailData.text[language === "English" ? "English" : "Español"]}
        </Text>
      </Flex>
    </Flex>
  );
};
