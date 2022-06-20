import React from "react";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { TriangleDownIcon } from "@chakra-ui/icons";

interface CardProps {
  profilePic?: string;
  username?: string;
  role?: string;
}

export const UserCard: React.FC<CardProps> = ({ ...props }) => {
  return (
    <div className="">
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<TriangleDownIcon />}
          className="p-6 py-7"
          colorScheme="gray"
          color="black"
        >
          <div className="flex">
            <img
              src={props.profilePic}
              alt="profile"
              className="h-11 mr-3 mt-1 rounded-full"
            />
            <div className="">
              <p className="text-lg font-inter font-semibold m-0">
                {" "}
                {props.username}{" "}
              </p>
              <p className="text-base font-raleway font-thin m-0">
                {" "}
                {props.role}{" "}
              </p>
            </div>
          </div>
        </MenuButton>
        <MenuList width="">
          <MenuItem width="280px">Saved Jobs</MenuItem>
          <MenuItem width="280px" color="red">
            Logout
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};
