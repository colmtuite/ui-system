import Image from "next/image";
import { Badge } from "../components";

export default function Home() {
  return (
    <main>
      <Badge>Size 1</Badge>
      <Badge size="2" mr="3">
        Size 2
      </Badge>
      <Badge size="2">Gray</Badge>
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
    </main>
  );
}
