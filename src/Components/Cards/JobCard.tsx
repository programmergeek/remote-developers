import { Box, Button, IconButton, Link, Tag } from "@chakra-ui/react";
import React, { useState } from "react";
import { FilledStar, Star } from "../Icons";

interface JobProps {
  logo: string;
  saved: boolean;
  role: string;
  tags: string[];
  snippet: string;
  href: string;
}

export const JobCard: React.FC<JobProps> = ({ ...props }) => {
  const [save, updateSave] = useState(props.saved);

  return (
    <Box
      className="w-96 h-96 bg-gray-50 p-3 rounded-[3px] shadow-lg sm:hover:shadow-2xl"
      transition="150ms"
    >
      <div
        className="grid grid-cols-2"
        style={{
          gridTemplateColumns: "85% auto",
        }}
      >
        <img src={props.logo} alt="logo" className="h-20 rounded-full" />
        <IconButton
          borderRadius="9999px"
          aria-label="save"
          bg="white"
          width="50px"
          height="50px"
          _hover={{
            backgroundColor: "white",
          }}
          _active={{
            backgroundColor: "white",
          }}
          // change icon on change
          icon={save ? <FilledStar /> : <Star />}
          onClick={() => {
            updateSave(!save);
          }}
        />
      </div>
      <header className="text-left text-2xl font-inter font-medium my-4">
        {props.role}
      </header>
      <div className="my-2 flex justify-start">
        {props.tags?.map((tag) => {
          return (
            <Tag
              className="mr-2 font-inter cursor-pointer"
              bg="#BCFFC6"
              color="#0FB900"
              size="md"
              paddingLeft="18px"
              paddingRight="18px"
              paddingTop="2px"
              _hover={{
                backgroundColor: "green.100",
                color: "green.500",
              }}
              transition="150ms"
            >
              {tag}
            </Tag>
          );
        })}
      </div>
      <p className="text-left font-raleway text-sm h-36">{props.snippet}</p>
      <Link
        _hover={{
          textDecor: "none",
        }}
        href={props.href}
        className="grid grid-cols-1"
        isExternal
      >
        <Button fontSize="20px" fontWeight="normal" className="font-raleway">
          Apply
        </Button>
      </Link>
    </Box>
  );
};
