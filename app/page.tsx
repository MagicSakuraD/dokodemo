import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="p-4 space-y-4 flex flex-col max-w-[200px]">
      <Button>点一点</Button>
      <Button variant={"primary"}>Wanna be</Button>
      <Button variant={"primaryOutline"}>little by little</Button>
      <Button variant={"secondary"}>Wanna Be Yours</Button>
      <Button variant={"secondaryOutline"}>little by little</Button>
      <Button variant={"danger"}>Beautiful Things</Button>
      <Button variant={"dangerOutline"}>like the way</Button>
      <Button variant={"super"}>Beautiful Things</Button>
      <Button variant={"superOutline"}>like the way</Button>
      <Button variant={"ghost"}>like the way</Button>
    </div>
  );
}
