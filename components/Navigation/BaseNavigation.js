import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import Link from "next/link";
import { IoLogoGithub } from "react-icons/io5";


export const BaseNavigation = ({data}) => {
  return (
    <Breadcrumb
      separator=""
      display={{ base: "none", sm: "flex", md: "flex" }}
      mr={3}
      fontSize={18}
      spacing={4}
    >
      {data?.Links.map((link) => {
        return (
          <BreadcrumbItem key={"BaseLink" + link.Title}>
            <BreadcrumbLink as={Link} href={link.href}>
              {link.Title}
            </BreadcrumbLink>
          </BreadcrumbItem>
        );
      })}
      <BreadcrumbItem>
        <BreadcrumbLink
          as={Link}
          href={data.Source.href}
          target={data.Source.target}
          rel={data.Source.rel}
          display="inline-flex"
          alignItems="center"
          style={{ gap: 3 }}
        >
          {data.Source.Title}
          <IoLogoGithub />
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};


