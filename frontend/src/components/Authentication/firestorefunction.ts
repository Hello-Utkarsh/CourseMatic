// firestoreFunctions.ts
import { db } from './Firebase'; // Import Firebase Firestore configuration
import { collection, addDoc, getDocs, updateDoc, doc } from 'firebase/firestore';

// Add project to Firestore
export const addProject = async (projectName: string, user: string, videoLinks: string[], subtitles: object[], audioLinks: string[]) => {
  try {
    await addDoc(collection(db, "projects"), {
      projectName,
      user,
      videoLinks,
      subtitles,
      audioLinks
    });
    console.log("Project added successfully");
  } catch (error) {
    console.error("Error adding project: ", error);
  }
};

// Get all projects from Firestore
export const getProjects = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "projects"));
    const projects: any[] = [];
    querySnapshot.forEach((doc) => {
      projects.push({ id: doc.id, ...doc.data() });
    });
    return projects;
  } catch (error) {
    console.error("Error fetching projects: ", error);
  }
};

// Update a project in Firestore
export const updateProject = async (projectId: string, updatedData: object) => {
  try {
    const projectRef = doc(db, "projects", projectId);
    await updateDoc(projectRef, updatedData);
    console.log("Project updated successfully");
  } catch (error) {
    console.error("Error updating project: ", error);
  }
};
