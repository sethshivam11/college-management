import React from "react";
import { Input } from "./ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { useRoom } from "@/context/RoomProvider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useUser } from "@/context/UserProvider";
import { toast } from "sonner";

function AddRoom() {
  const { rooms } = useRoom();
  const { user } = useUser();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!user._id) {
      toast("Please login again");
      navigate("/login");
    } else {
      if (!user.isAdmin) navigate("/bookroom");
    }
  }, [user]);

  const [body, setBody] = React.useState([
    {
      roomNumber: "",
      capacity: "",
      location: "",
    },
  ]);
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const index = e.target.parentElement?.parentElement?.dataset.index;
    if (!index) return console.log("Index not found");
    setBody(
      body.map((room, idx) => {
        if (idx === parseInt(index?.toString())) {
          return { ...room, [e.target.name]: e.target.value };
        }
        return room;
      })
    );
  }
  return (
    <section className="min-h-screen min-w-screen">
      <form>
        <Card className="w-5/6 md:w-3/5 mx-auto dark:bg-card bg-zinc-100 mt-10">
          <CardHeader>
            <CardTitle className="text-2xl">Rooms</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <table>
                <tbody>
                  {body.map((room, index) => {
                    return (
                      <tr
                        className="grid grid-cols-3"
                        key={index}
                        data-index={index}
                      >
                        <td>
                          <Input
                            id={`${index}-room`}
                            placeholder="Room number"
                            name="roomNumber"
                            inputMode="text"
                            value={room.roomNumber}
                            onChange={handleChange}
                          />
                        </td>
                        <td>
                          <Input
                            placeholder="Capacity"
                            name="capacity"
                            inputMode="numeric"
                            type="number"
                            value={room.capacity}
                            onChange={handleChange}
                          />
                        </td>
                        <td>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Location" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Ground floor">
                                Ground floor
                              </SelectItem>
                              <SelectItem value="First floor">
                                First floor
                              </SelectItem>
                              <SelectItem value="Second floor">
                                Second floor
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </td>
                      </tr>
                    );
                  })}
                  <tr className="flex flex-start mt-2 gap-2">
                    <td>
                      <Button
                        variant="secondary"
                        type="button"
                        onClick={() =>
                          setBody([
                            ...body,
                            {
                              roomNumber: "",
                              capacity: "",
                              location: "",
                            },
                          ])
                        }
                      >
                        Add more
                      </Button>
                    </td>
                    <td>
                      <Button
                        variant="destructive"
                        type="button"
                        disabled={body.length === 1}
                        onClick={() => {
                          if (body.length === 1) return;
                          setBody(body.splice(0, body.length - 1));
                        }}
                      >
                        Remove
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button
              variant="outline"
              type="reset"
              size="lg"
              onClick={() => navigate("/admin/teachersabsent")}
            >
              Cancel
            </Button>
            <Button type="submit" size="lg">
              Add
            </Button>
          </CardFooter>
        </Card>
      </form>
      <h1 className="my-4 text-center text-2xl">Available Rooms</h1>
      <Table className="mx-auto w-5/6 md:w-3/5 my-6">
        <TableHeader>
          <TableRow>
            <TableHead>Room Number</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Sitting Capacity</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rooms.length ? rooms.map((room, index) => {
            return (
              <TableRow key={index}>
                <TableCell>{room.roomNumber}</TableCell>
                <TableCell>{room.capacity}</TableCell>
                <TableCell>{room.location}</TableCell>
              </TableRow>
            );
          }): (
            <TableRow>
              <TableCell colSpan={3}>No rooms</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </section>
  );
}

export default AddRoom;
