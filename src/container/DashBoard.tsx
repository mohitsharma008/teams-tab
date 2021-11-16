import {
  Box,
  Button,
  Flex,
  FlexItem,
  Grid,
  Header,
  Image,
  Loader,
  Input,
  List,
  Segment,
} from "@fluentui/react-northstar";
import "./DashBoard.css";
import React, { useEffect, useState } from "react";
import HeaderComponent from "../components/HeaderComponent";
import { useTypedSelector } from ".././redux/Hooks/useSelect";
import { useActions } from "../redux/Hooks/useAction";
import { AddIcon } from "@fluentui/react-icons-northstar";
// import { fetchPosts } from "../redux/Actions/apiAction";
import axios from "axios";
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
    content: "fds",
  },
  {
    key: "project2",
    media: (
      <Image
        src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/CelesteBurton.jpg"
        avatar
      />
    ),
    content: "fds1",
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
    content: "fds2",
    header: "Project 3",
  },
  {
    key: "project13",
    media: (
      <Image
        src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/CecilFolk.jpg"
        avatar
      />
    ),

    content: "Project 3",
    header: "Project 3",
  },
  {
    key: "project23",
    media: (
      <Image
        src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/CecilFolk.jpg"
        avatar
      />
    ),
    content: "Project 3",

    header: "Project 3",
  },
  {
    key: "project33",
    media: (
      <Image
        src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/CecilFolk.jpg"
        avatar
      />
    ),
    content: "Project 3",

    header: "Project 3",
  },
  {
    key: "project43",
    media: (
      <Image
        src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/CecilFolk.jpg"
        avatar
      />
    ),
    content: "Project 3",

    header: "Project 3",
  },
  {
    key: "project53",
    media: (
      <Image
        src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/CecilFolk.jpg"
        avatar
      />
    ),
    header: "Project 3",
  },
  {
    key: "project63",
    media: (
      <Image
        src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/CecilFolk.jpg"
        avatar
      />
    ),
    content: "Project 3",

    header: "Project 3",
  },
];

const details = [
  {
    key: "robert",
    header1: "1. Feature",
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
    key: "ceciln1m",
    header: "6. Feature",
  },
  {
    key: "ceciln2m",
    header: "6. Feature",
  },
  {
    key: "ceciln3m",
    header: "6. Feature",
  },
  {
    key: "ceciln4m",
    header: "6. Feature",
  },
  {
    key: "ceciln5m",
    header: "6. Feature",
  },
  {
    key: "ceciln6m",
    header: "6. Feature",
  },
  {
    key: "ceciln7m",
    header: "7. Feature",
  },
];

const DashBoard: React.FC<{}> = () => {
  const value = useTypedSelector((state) => state.repositories);
  const { fetchData } = useActions();

  useEffect(() => {
    const URL = "https://618cf07bedab980017fd50d6.mockapi.io/api/v1/user";
    fetchData(URL);
  }, []);
  if (value.error !== null) {
    return <h3>{value.error} Please Try Again!</h3>;
  }
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
          minHeight: "34px",
          backgroundColor: "red",
          right: "0px",
        }}
      >
        <HeaderComponent />
      </div>
      <div
        style={{
          position: "absolute",
          left: "0px",
          top: "34px",
          bottom: "0px",
          zIndex: 103,
          padding: 5,
        }}
      >
        <div
          style={{
            width: "200px",
            height: "100%",
            padding: "0px",
            float: "left",
            margin: "0px",
            position: "relative",
            zIndex: 1,
            overflow: "auto",
          }}
        >
          <Flex.Item size="size.quarter" grow>
            <Segment>
              <Input
                color="#333"
                placeholder="Search Project & Feature"
                fluid
              />
              {value.loading && <Loader label="process.." />}
              {value.data !== null &&
                value.data.map((res: any, index: number) => {
                  return (
                    // const resdata = res.content;
                    <List key={index} className="selectList">
                      {res.project}
                    </List>
                  );
                })}
            </Segment>
          </Flex.Item>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          left: "210px",
          top: "34px",
          bottom: "0px",
          right: "0px",
          zIndex: 103,
          padding: 5,
        }}
      >
        <div
          style={{
            // width: "500px",
            height: "100%",
            padding: "0px",
            right: "0px",
            margin: "0px",
            position: "relative",
            overflow: "auto",
          }}
        >
          <Flex
            gap="gap.small"
            padding="padding.medium"
            style={{ minHeight: "calc(100vh - 60px)", right: 0, left: 0 }}
          >
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
                          <div
                            style={{
                              height: "350px",
                              overflow: "auto",
                            }}
                          >
                            {value.loading && <Loader label="process.." />}

                            {value.data !== null &&
                              value.data.map((res: any, index: number) => {
                                return (
                                  // const resdata = res.content;
                                  <List
                                    key={index}
                                    className="selectList"
                                    onClick={() => console.log("hello")}
                                  >
                                    {res.project}
                                  </List>
                                );
                              })}
                          </div>
                        </FlexItem>
                        <FlexItem size="size.half">
                          <div>
                            <div
                              style={{
                                height: "350px",
                                overflow: "auto",
                              }}
                            >
                              {value.loading && <Loader label="process.." />}

                              {value.data !== null &&
                                value.data.map((res: any, index: number) => {
                                  return (
                                    // const resdata = res.content;
                                    <List
                                      key={index}
                                      className="selectList"
                                      onClick={() => console.log("hello")}
                                    >
                                      {res.project}
                                    </List>
                                  );
                                })}
                            </div>
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
                      <div
                        style={{
                          height: "350px",
                          overflow: "auto",
                        }}
                      >
                        {value.loading && <Loader label="process.." />}

                        {value.data &&
                          value.data.map((res: any, index: number) => {
                            return (
                              // const resdata = res.content;
                              <List
                                key={index}
                                className="selectList"
                                onClick={() => console.log("hello")}
                              >
                                {res.employee}
                              </List>
                            );
                          })}
                      </div>
                    </Segment>
                  </FlexItem>
                </Flex>
              </Segment>
            </Flex.Item>
          </Flex>
        </div>
      </div>
      {/* <div style={{ display: "flex" }}>
          <div
            style={{
              height: "100vh",
              overflow: "auto",
              width: "20%",
              backgroundColor: "red",
              paddingTop: "34px",
            }}
          >
            <h1>dsas</h1>
            <h1>dsas</h1>
            <h1>dsas</h1>
            <h1>dsas</h1>
            <h1>dsas</h1>
            <h1>dsas</h1>
            <h1>dsas</h1>
            <h1>dsas</h1>
            <h1>dsas</h1>
            <h1>dsas</h1>
            <h1>dsas</h1>
            <h1>dsas</h1>
            <h1>dsas</h1>
            <h1>dsas</h1>
            <h1>dsas</h1>
            <h1>dsas</h1>
            <h1>dsas</h1>
            <h1>dsas</h1>
            <h1>dsas</h1>
            <h1>dsas</h1>
            <h1>dsas</h1>
            <h1>dsas</h1>
            <h1>dsas</h1>
            <h1>d5sas</h1>
          </div>
        </div> */}

      {/* <div
          style={{
            position: "absolute",
            top: "34px",
            overflow: "auto",
            bottom: "0px",
            left: "0px",
            right: "0px",
          }}
          role="banner"
        >
          <Flex
            gap="gap.small"
            padding="padding.medium"
            style={{ minHeight: "calc(100vh - 60px)" }}
          >
            <Flex.Item size="size.quarter" grow>
              <Segment>
                <Input
                  color="#333"
                  placeholder="Search Project & Feature"
                  fluid
                />
                <div
                  style={{
                    height: "500px",
                    overflow: "auto",
                  }}
                >
                  {mock &&
                    mock.map((res: any) => {
                      return (
                        // const resdata = res.content;
                        <List className="selectList">{res.project}</List>
                      );
                    })}
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
                          <div
                            style={{
                              height: "350px",
                              overflow: "auto",
                            }}
                          >
                            {mock &&
                              mock.map((res: any) => {
                                return (
                                  // const resdata = res.content;
                                  <List
                                    className="selectList"
                                    onClick={() => console.log("hello")}
                                  >
                                    {res.project}
                                  </List>
                                );
                              })}
                          </div>
                        </FlexItem>
                        <FlexItem size="size.half">
                          <div>
                            <div
                              style={{
                                height: "350px",
                                overflow: "auto",
                              }}
                            >
                              {mock &&
                                mock.map((res: any) => {
                                  return (
                                    // const resdata = res.content;
                                    <List
                                      className="selectList"
                                      onClick={() => console.log("hello")}
                                    >
                                      {res.project}
                                    </List>
                                  );
                                })}
                            </div>
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
                      <div
                        style={{
                          height: "350px",
                          overflow: "auto",
                        }}
                      >
                        {mock &&
                          mock.map((res: any) => {
                            return (
                              // const resdata = res.content;
                              <List
                                className="selectList"
                                onClick={() => console.log("hello")}
                              >
                                {res.employee}
                              </List>
                            );
                          })}
                      </div>
                    </Segment>
                  </FlexItem>
                </Flex>
              </Segment>
            </Flex.Item>
          </Flex>
        </div> */}
    </div>
  );
};
export default DashBoard;
