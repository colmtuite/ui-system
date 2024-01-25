"use client";
import React from "react";
import {
  Badge,
  Box,
  Button,
  Container,
  Flare,
  Flex,
  Grid,
  Text,
  Status,
  Tabs,
  Tab,
  TabList,
  TabPanel,
  Switch,
} from "../components";

import {
  // Button,
  Header,
  Keyboard,
  Menu,
  MenuItem,
  MenuTrigger,
  Popover,
  Section,
  Separator,
  // Text,
  FileTrigger,
} from "react-aria-components";

import type { Selection } from "react-aria-components";

export default function Home() {
  let [selected, setSelected] = React.useState<Selection>(new Set(["center"]));
  let [file, setFile] = React.useState(null);
  return (
    <main>
      <Flex gap="6" m="8" wrap="wrap">
        <Switch size="1" />
        <Switch size="2" />
        <Switch size="3" />

        <Switch color="gray" />
        <Switch color="blue" />
        <Switch color="green" />
        <Switch color="red" />
        <Tabs>
          <TabList aria-label="History of Ancient Rome">
            <Tab id="1">Feed</Tab>
            <Tab id="2">Notes</Tab>
            <Tab id="3">Feedback</Tab>
            <Tab id="4">Emails</Tab>
            <Tab id="5">Referrals</Tab>
          </TabList>
          <TabPanel id="1">
            <Text>Tab panel one.</Text>
          </TabPanel>
          <TabPanel id="2">
            <Text>Tab panel two.</Text>
          </TabPanel>
          <TabPanel id="3">
            <Text>Tab panel three.</Text>
          </TabPanel>
          <TabPanel id="4">
            <Text>Tab panel four.</Text>
          </TabPanel>
          <TabPanel id="5">
            <Text>Tab panel five.</Text>
          </TabPanel>
        </Tabs>

        <Button size="1">Size 1</Button>
        <Button>Size 2</Button>
        <Button size="3">Size 3</Button>

        <Button color="gray">Gray</Button>
        <Button color="blue">Blue</Button>
        <Button color="green">Green</Button>
        <Button color="red">Red</Button>

        <Button color="gray" ghost>
          Gray Ghost
        </Button>
        <Button color="blue" ghost>
          Blue Ghost
        </Button>
        <Button color="green" ghost>
          Green Ghost
        </Button>
        <Button color="red" ghost>
          Red Ghost
        </Button>

        <Button color="gray" isDisabled>
          Gray disabled
        </Button>
        <Button color="blue" isDisabled>
          Blue disabled
        </Button>
        <Button color="green" isDisabled>
          Green disabled
        </Button>
        <Button color="red" isDisabled>
          Red disabled
        </Button>

        <Flex align="center" gap="2">
          <FileTrigger
            onSelect={(e) => {
              let files = Array.from(e);
              let filenames = files.map((file) => file.name);
              setFile(filenames);
            }}
          >
            <Button>File Trigger</Button>
          </FileTrigger>
          <Text size="2">{file && file}</Text>
        </Flex>
      </Flex>

      {/* <div
        style={{
          position: "fixed",
          height: "100vh",
          width: 1,
          left: "50%",
          backgroundColor: "var(--gray-4)",
        }}
      ></div>
      <Section>
        <Container> */}
      {/* <MenuTrigger>
        <Button className="Button">Menu</Button>
        <Popover className="Popover">
          <Menu
            selectionMode="single"
            selectedKeys={selected}
            onSelectionChange={setSelected}
            className="Menu"
          >
            <MenuItem className="MenuItem" id="cut">
              Open
              <Keyboard className="MenuKbd">C</Keyboard>
            </MenuItem>
            <MenuItem className="MenuItem" id="copy">
              Save
              <Keyboard className="MenuKbd">G</Keyboard>
            </MenuItem>
            <MenuItem className="MenuItem" id="paste">
              Cut
              <Keyboard className="MenuKbd">P</Keyboard>
            </MenuItem>
            <Separator className="Separator" />
            <Section className="MenuSection">
              <Header className="MenuHeader">Header</Header>
              <MenuItem className="MenuItem" id="one">
                <Text className="Text" slot="label">
                  fewfwe
                </Text>
                <Text className="Text" slot="description">
                  fwefewfwfe
                </Text>
                <Keyboard>g</Keyboard>
              </MenuItem>
              <MenuItem className="MenuItem" id="two">
                <Text className="Text" slot="label">
                  fewfwe
                </Text>
                <Text className="Text" slot="description">
                  fwefewfwfe
                </Text>
                <Keyboard>g</Keyboard>
              </MenuItem>
              <MenuItem className="MenuItem" id="three">
                <Text className="Text" slot="label">
                  fewfwe
                </Text>
                <Text className="Text" slot="description">
                  fwefewfwfe
                </Text>
                <Keyboard>g</Keyboard>
              </MenuItem>
            </Section>
          </Menu>
        </Popover>
      </MenuTrigger> */}

      {/* <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(13, 1fr)",
              // gap: 1,
              filter: "grayscale(1)",
            }}
          >
            <div
              style={{ height: 32, backgroundColor: "var(--mauve-area-1)" }}
            ></div>
            <div
              style={{ height: 32, backgroundColor: "var(--mauve-area-2)" }}
            ></div>
            <div
              style={{ height: 32, backgroundColor: "var(--mauve-bg-1)" }}
            ></div>
            <div
              style={{ height: 32, backgroundColor: "var(--mauve-bg-2)" }}
            ></div>
            <div
              style={{ height: 32, backgroundColor: "var(--mauve-bg-3)" }}
            ></div>
            <div
              style={{ height: 32, backgroundColor: "var(--mauve-bg-4)" }}
            ></div>
            <div
              style={{ height: 32, backgroundColor: "var(--mauve-bg-5)" }}
            ></div>
            <div
              style={{ height: 32, backgroundColor: "var(--mauve-stroke-1)" }}
            ></div>
            <div
              style={{ height: 32, backgroundColor: "var(--mauve-stroke-2)" }}
            ></div>
            <div
              style={{ height: 32, backgroundColor: "var(--mauve-stroke-3)" }}
            ></div>
            <div
              style={{ height: 32, backgroundColor: "var(--mauve-stroke-4)" }}
            ></div>
            <div
              style={{ height: 32, backgroundColor: "var(--mauve-text-1)" }}
            ></div>
            <div
              style={{ height: 32, backgroundColor: "var(--mauve-text-2)" }}
            ></div>
            <div
              style={{ height: 32, backgroundColor: "var(--violet-area-1)" }}
            ></div>
            <div
              style={{ height: 32, backgroundColor: "var(--violet-area-2)" }}
            ></div>
            <div
              style={{ height: 32, backgroundColor: "var(--violet-bg-1)" }}
            ></div>
            <div
              style={{ height: 32, backgroundColor: "var(--violet-bg-2)" }}
            ></div>
            <div
              style={{ height: 32, backgroundColor: "var(--violet-bg-3)" }}
            ></div>
            <div
              style={{ height: 32, backgroundColor: "var(--violet-bg-4)" }}
            ></div>
            <div
              style={{ height: 32, backgroundColor: "var(--violet-bg-5)" }}
            ></div>
            <div
              style={{ height: 32, backgroundColor: "var(--violet-stroke-1)" }}
            ></div>
            <div
              style={{ height: 32, backgroundColor: "var(--violet-stroke-2)" }}
            ></div>
            <div
              style={{ height: 32, backgroundColor: "var(--violet-stroke-3)" }}
            ></div>
            <div
              style={{ height: 32, backgroundColor: "var(--violet-stroke-4)" }}
            ></div>
            <div
              style={{ height: 32, backgroundColor: "var(--violet-text-1)" }}
            ></div>
            <div
              style={{ height: 32, backgroundColor: "var(--violet-text-2)" }}
            ></div>
            <div
              style={{ height: 32, backgroundColor: "var(--blue-area-1)" }}
            ></div>
            <div
              style={{ height: 32, backgroundColor: "var(--blue-area-2)" }}
            ></div>
            <div
              style={{ height: 32, backgroundColor: "var(--blue-bg-1)" }}
            ></div>
            <div
              style={{ height: 32, backgroundColor: "var(--blue-bg-2)" }}
            ></div>
            <div
              style={{ height: 32, backgroundColor: "var(--blue-bg-3)" }}
            ></div>
            <div
              style={{ height: 32, backgroundColor: "var(--blue-bg-4)" }}
            ></div>
            <div
              style={{ height: 32, backgroundColor: "var(--blue-bg-5)" }}
            ></div>
            <div
              style={{ height: 32, backgroundColor: "var(--blue-stroke-1)" }}
            ></div>
            <div
              style={{ height: 32, backgroundColor: "var(--blue-stroke-2)" }}
            ></div>
            <div
              style={{ height: 32, backgroundColor: "var(--blue-stroke-3)" }}
            ></div>
            <div
              style={{ height: 32, backgroundColor: "var(--blue-stroke-4)" }}
            ></div>
            <div
              style={{ height: 32, backgroundColor: "var(--blue-text-1)" }}
            ></div>
            <div
              style={{ height: 32, backgroundColor: "var(--blue-text-2)" }}
            ></div>
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <Text
            align={{ initial: "left", md: "center" }}
            color={{ initial: "red", md: "gray" }}
            size={{ initial: "8", md: "9" }}
            weight={{ initial: "1", md: "2" }}
          >
            Tougher than any smartphone glass
          </Text>
          <Text size="5" color="gray">
            Get €140–€495 in credit towards iPhone 14 Pro when you trade in
            iPhone 11 or higher.
          </Text>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="Card">
            <Text size="4">Get €140–€495 in credit</Text>
            <Text size="3" color="gray">
              Get €140–€495 in credit towards iPhone 14 Pro when you trade in
              iPhone 11 or higher.
            </Text>
          </div>
        </Container>
      </Section>

      <Section border="both">
        <Container>
          <Text size="9">Tougher than any smartphone glass</Text>
          <Text size="5" color="gray">
            Get €140–€495 in credit towards iPhone 14 Pro when you trade in
            iPhone 11 or higher.
          </Text>
        </Container>
        <Flare color="yellow" side="top" />
        <Flare color="yellow" />
      </Section>
      <Section>
        <Container>
          <Grid columns="2" gap="9">
            <Box>
              <Flex wrap="wrap">
                <Badge>Size 1</Badge>
                <Badge size="2" mr="3">
                  Size 2
                </Badge>
              </Flex>
              <Flex wrap="wrap" gap="5">
                <Badge size="2">Gray</Badge>
                <Badge size="2" color="purple">
                  Purple
                </Badge>
                <Badge size="2" color="blue">
                  Blue
                </Badge>
                <Badge size="2" color="green">
                  Hello
                </Badge>
                <Badge size="2" color="yellow">
                  Yellow
                </Badge>
                <Badge size="2" color="red">
                  Red
                </Badge>
                <Badge size="2" color="orange">
                  Orange
                </Badge>
                <Badge size="2" color="bronze">
                  Bronze
                </Badge>
                <Badge size="2" color="gold">
                  Gold
                </Badge>
              </Flex>
            </Box>
            {/* <Box>
              <Flex gap="4">
                <Button size="1">Create Field</Button>
                <Button size="2">Create Field</Button>
                <Button size="3" color="blue">
                  Request a Demo
                </Button>
              </Flex>

              <Flex gap="4">
                <Button size="2" color="gray">
                  Create Field
                </Button>
                <Button size="2" color="blue">
                  Create Field
                </Button>
                <Button size="2" color="green">
                  Create Field
                </Button>
                <Button size="2" color="red">
                  Create Field
                </Button>
              </Flex>

              <Flex gap="4">
                <Button size="2" color="gray" ghost>
                  Create Field
                </Button>
                <Button size="2" color="blue" ghost>
                  Create Field
                </Button>
                <Button size="2" color="green" ghost>
                  Create Field
                </Button>
                <Button size="2" color="red" ghost>
                  Create Field
                </Button>
              </Flex>
            </Box>
          </Grid>
        </Container>
      </Section>

      <Flex direction="column" gap="4">
        <Text size="9">Fuck me pink</Text>
        <Text size="8">Fuck me pink</Text>
        <Text size="7">Fuck me pink</Text>
        <Text size="6">Fuck me pink</Text>
        <Text size="5">Fuck me pink</Text>
        <Text size="4">Fuck me pink</Text>
        <Text size="3">Fuck me pink</Text>
        <Text size="2">Fuck me pink</Text>
        <Text size="1">Fuck me pink</Text>
      </Flex>

      <Flex direction="column" gap="4">
        <Text size="7" color="gray" weight="1">
          Fuck me pink
        </Text>
        <Text size="7" color="blue" weight="1">
          Fuck me pink
        </Text>
        <Text size="7" color="green" weight="1">
          Fuck me pink
        </Text>
        <Text size="7" color="yellow" weight="1">
          Fuck me pink
        </Text>
        <Text size="7" color="red" weight="1" align="center">
          Fuck me pink
        </Text>
      </Flex>

      <Flex gap="4">
        <Status size="1" />
        <Status size="2" />
        <Status size="2" color="gray" />
        <Status size="2" color="green" />
        <Status size="2" color="yellow" />
        <Status size="2" color="red" />
      </Flex> */}
    </main>
  );
}
