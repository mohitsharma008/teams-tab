import {
  Box,
  Button,
  Flex,
  FlexItem,
  Grid,
  Header,
  Image,
  Input,
  List,
  Segment,
} from "@fluentui/react-northstar";
import React from "react";
import HeaderComponent from "../components/HeaderComponent";

import { AddIcon } from "@fluentui/react-icons-northstar";

const items = [
  {
    key: "project1",
    media: (
      <Image
        src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/RobertTolbert.jpg"
        avatar
      />
    ),
    header: "Project 1",
  },
  {
    key: "project2",
    media: (
      <Image
        src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/CelesteBurton.jpg"
        avatar
      />
    ),
    header: "Project 2",
  },
  {
    key: "project3",
    media: (
      <Image
        src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/CecilFolk.jpg"
        avatar
      />
    ),
    header: "Project 3",
  },
  {
    key: "project3",
    media: (
      <Image
        src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/CecilFolk.jpg"
        avatar
      />
    ),
    header: "Project 3",
  },
  {
    key: "project3",
    media: (
      <Image
        src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/CecilFolk.jpg"
        avatar
      />
    ),
    header: "Project 3",
  },
  {
    key: "project3",
    media: (
      <Image
        src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/CecilFolk.jpg"
        avatar
      />
    ),
    header: "Project 3",
  },
  {
    key: "project3",
    media: (
      <Image
        src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/CecilFolk.jpg"
        avatar
      />
    ),
    header: "Project 3",
  },
  {
    key: "project3",
    media: (
      <Image
        src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/CecilFolk.jpg"
        avatar
      />
    ),
    header: "Project 3",
  },
];

const details = [
  {
    key: "robert",
    header: "1. Feature",
  },
  {
    key: "celeste",
    header: "2. Feature",
  },
  {
    key: "cecil",
    header: "3. Feature",
  },
  {
    key: "robertf",
    header: "4. Feature",
  },
  {
    key: "celestebn",
    header: "5. Feature",
  },
  {
    key: "cecilnm",
    header: "6. Feature",
  },
];

const DashBoard: React.FC<{}> = () => {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "blue",
        height: "100%",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "0px",
          left: "0px",
          height: "34px",
          backgroundColor: "red",
          right: "0px",
          overflow: "hidden",
        }}
      >
        <HeaderComponent />
      </div>
      <div
        style={{
          position: "absolute",
          top: "34px",
          overflow: "auto",
          bottom: "0px",
          left: "0px",
          backgroundColor: "orange",
          right: "0px",
        }}
        role="banner"
      >
        <Flex
          gap="gap.small"
          padding="padding.medium"
          style={{ backgroundColor: "orange", minHeight: "calc(100vh - 60px)" }}
        >
          <Flex.Item size="size.quarter" grow>
            <Segment>
              <Input
                color="#333"
                placeholder="Search Project & Feature"
                fluid
              />
              <div>
                <List navigable items={items} />
              </div>
            </Segment>
          </Flex.Item>
          <Flex.Item size="100%">
            <Segment>
              <Flex gap="gap.small" padding="padding.medium">
                <FlexItem>
                  <AddIcon />
                </FlexItem>
                <FlexItem push>
                  <Button content="Update" primary />
                </FlexItem>
                <Button content="Team Meeting" primary icon={<AddIcon />} />
              </Flex>
              <Flex gap="gap.small">
                <FlexItem size="75%">
                  <Segment>
                    <Header
                      style={{ margin: "0px" }}
                      as="h3"
                      content="Project Title"
                    ></Header>
                    <Flex gap="gap.small">
                      <FlexItem size="size.half">
                        <List navigable items={details} />
                      </FlexItem>
                      <FlexItem size="size.half">
                        <div>
                          <List navigable items={items} />
                        </div>
                      </FlexItem>
                    </Flex>
                  </Segment>
                </FlexItem>
                <FlexItem size="25%">
                  <Segment>
                    <Header
                      style={{ margin: "0px" }}
                      as="h3"
                      content="Team Member"
                      align="center"
                      color="#333"
                    ></Header>
                  </Segment>
                </FlexItem>
              </Flex>
            </Segment>
          </Flex.Item>
        </Flex>
      </div>
    </div>
  );
};
export default DashBoard;
