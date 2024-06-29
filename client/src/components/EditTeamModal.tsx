import { Edit } from "lucide-react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
import { Button } from "./ui/button";
import EditTeamForm from "./EditTeamForm";
import { useState } from "react";

type Props = {
  TeamInfo: {
    roomNumber: string;
    capacity: number;
    _id: string;
    location: string;
  };
};

export default function EditTeamModal({ TeamInfo }: Props) {
    const [open,setOpen] = useState(false);
    return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button size="icon" variant={"secondary"}>
          <Edit />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className=" overflow-hidden">
        <EditTeamForm setOpen={setOpen} TeamInfo={TeamInfo} />
      </AlertDialogContent>
    </AlertDialog>
  );
}
