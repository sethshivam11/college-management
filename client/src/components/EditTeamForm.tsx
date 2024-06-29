import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useRoom } from "@/context/RoomProvider";

type Props = {
  TeamInfo: {
    roomNumber: string;
    capacity: number;
    _id: string;
    location: string;
  };
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const formSchema = z.object({
  roomNumber: z.string().min(2).max(50),
  capacity: z.string().min(1).max(20),
  location: z.string().min(2).max(50),
});

export default function EditTeamForm({ TeamInfo, setOpen }: Props) {
  const { updateRooms } = useRoom();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      roomNumber: TeamInfo.roomNumber,
      capacity: TeamInfo.capacity.toString(),
      location: TeamInfo.location,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    updateRooms(
      values.roomNumber.toString(),
      values.capacity.toString(),
      values.location.toString(),
      TeamInfo._id.toString()
    );
    setOpen(false);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 overflow-hidden"
      >
        <FormField
          control={form.control}
          name="roomNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Room Number</FormLabel>
              <FormControl>
                <Input placeholder="Room Number..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="capacity"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Capacity</FormLabel>
              <FormControl>
                <Input
                  placeholder="Capacity"
                  inputMode="numeric"
                  type="number"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="location"
          render={({ field: { onChange, value } }) => (
            <FormItem>
              <FormLabel>Location</FormLabel>
              <FormControl>
                <Select onValueChange={onChange} value={value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Ground floor">Ground floor</SelectItem>
                    <SelectItem value="First floor">First floor</SelectItem>
                    <SelectItem value="Second floor">Second floor</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          variant={"secondary"}
          onClick={() => setOpen(false)}
          type="button"
        >
          Cancel
        </Button>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
