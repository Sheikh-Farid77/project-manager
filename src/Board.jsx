import { useState } from "react";
import AddItem from "./projectBoard/AddItem";
import Done from "./projectBoard/Done";
import Progress from "./projectBoard/Progress";
import Revise from "./projectBoard/Revise";
import ToDo from "./projectBoard/ToDo";

export default function Board() {
  const [projects, setProjects] = useState([]);

  const handleAddProject = (project) => {
      setProjects([...projects, project]);  
  };

  const handleDelete = (id)=>{
    const filtered = projects.filter(p => p.id !== id);
    setProjects([
      ...filtered
    ])
  }
  return (
    <div className="mx-auto max-w-7xl p-6">
      <AddItem onAddProject={handleAddProject} />
      <div className="-mx-2 mb-6 flex flex-wrap">
        <ToDo projects={projects} onDelete = {handleDelete} />
        <Progress projects={projects} onDelete = {handleDelete} />
        <Done projects={projects} onDelete = {handleDelete} />
        <Revise projects={projects} onDelete = {handleDelete} />
      </div>
    </div>
  );
}
