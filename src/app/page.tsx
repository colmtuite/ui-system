import { Badge, Button, Status, Text } from "../components";

export default function Home() {
  return (
    <main>
      <Badge>Size 1</Badge>
      <Badge size="2" mr="3">
        Size 2
      </Badge>
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
      <Text>Fuck me pink</Text>
      <Text size="9">Fuck me pink</Text>
      <Text size="8">Fuck me pink</Text>
      <Text size="7">Fuck me pink</Text>
      <Text size="6">Fuck me pink</Text>
      <Text size="5">Fuck me pink</Text>
      <Text size="4">Fuck me pink</Text>
      <Text size="3">Fuck me pink</Text>
      <Text size="2">Fuck me pink</Text>
      <Text size="1">Fuck me pink</Text>

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

      <Button size="1">Create Field</Button>
      <Button size="2">Create Field</Button>
      <Button size="3" color="blue">
        Request a Demo
      </Button>
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

      <Status size="1" />
      <Status size="2" />
      <Status size="2" color="gray" />
      <Status size="2" color="green" />
      <Status size="2" color="yellow" />
      <Status size="2" color="red" />

      <div
        style={{
          width: 300,
          height: 120,
          borderRadius: 6,
          borderWidth: 1,
          borderStyle: "solid",
          borderColor: "var(--gray-a7)",
          background: "white",
        }}
      >
        <Text size="2" weight="2">
          Colm Tuite
        </Text>
        <Text size="2" color="gray">
          CEO & Co-founder, Modulz
        </Text>
      </div>
    </main>
  );
}
