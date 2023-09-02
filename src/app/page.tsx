import {
  Badge,
  Box,
  Button,
  Container,
  Flare,
  Flex,
  Grid,
  Section,
  Status,
  Text,
} from "../components";

export default function Home() {
  return (
    <main>
      <div
        style={{
          position: "fixed",
          height: "100vh",
          width: 1,
          left: "50%",
          backgroundColor: "var(--gray-4)",
        }}
      ></div>
      <Section>
        <Container>
          <Text size="9">Tougher than any smartphone glass</Text>
          <Text size="5" color="gray">
            Get €140–€495 in credit towards iPhone 14 Pro when you trade in
            iPhone 11 or higher.
          </Text>
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
            <Box>
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
      </Flex>
    </main>
  );
}
