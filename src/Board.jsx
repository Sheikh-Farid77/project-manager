import AddItem from "./projectBoard/AddItem";
import Done from "./projectBoard/Done";
import Progress from "./projectBoard/Progress";
import Revise from "./projectBoard/Revise";
import ToDo from "./projectBoard/ToDo";

export default function Board() {
  return (
    <div className="mx-auto max-w-7xl p-6">
      <AddItem />
      <div className="-mx-2 mb-6 flex flex-wrap">
        <ToDo />
        <Progress />
        <Done />
        <Revise />
      </div>
    </div>
  );
}
