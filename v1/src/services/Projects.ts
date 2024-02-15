import { ProjectsType } from "../types/Projects"
import Projects from "../models/Projects"

const createProject = async (data: ProjectsType) => {
    try {
        const project = await Projects.create(data)
        console.log(project)
    } catch(err) {
        console.log(err)
    }
}

export {createProject}