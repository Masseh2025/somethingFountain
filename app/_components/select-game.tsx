import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
export function SelectTime() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="one">one</SelectItem>
          <SelectItem value="two">two</SelectItem>
          <SelectItem value="four">four</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
export function SelectGameType() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="solo" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="solo">Light</SelectItem>
          <SelectItem value="online">Dark</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
