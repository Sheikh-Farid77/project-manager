import { useState } from "react";
import AddItem from "./projectBoard/AddItem";
import Done from "./projectBoard/Done";
import Progress from "./projectBoard/Progress";
import Revise from "./projectBoard/Revise";
import ToDo from "./projectBoard/ToDo";

export default function Board() {
  const [projects, setProjects] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [editProject, setEditProject] = useState(null);

  const handleAddProject = (project, isAdd) => {
    if (isAdd) {
      setProjects([...projects, project]);
    } else {
      setProjects(
        projects.map((p) => {
          if (p.id === project.id) {
            return project;
          }
          return p;
        })
      );
    }

    setOpenModal(false);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setEditProject(null)
  };

  const handleDelete = (id) => {
    const filtered = projects.filter((p) => p.id !== id);
    setProjects([...filtered]);
  };

  const handleEditProject = (project) => {
    setEditProject(project);
    setOpenModal(true);
  };

  return (
    <div className="mx-auto max-w-7xl p-6">
      <AddItem
        onAddProject={handleAddProject}
        handleOpenModal={handleOpenModal}
        handleCloseModal={handleCloseModal}
        openModal={openModal}
        editProject={editProject}
      />
      <div className="-mx-2 mb-6 flex flex-wrap">
        <ToDo
          projects={projects}
          onDelete={handleDelete}
          onEdit={handleEditProject}
        />
        <Progress projects={projects} onDelete={handleDelete} onEdit={handleEditProject} />
        <Done projects={projects} onDelete={handleDelete} onEdit={handleEditProject} />
        <Revise projects={projects} onDelete={handleDelete} onEdit={handleEditProject} />
      </div>
    </div>
  );
}
