export type ContentDescriptor = {
    type: "component";
    component: string;
};

export type FolderNode = {
    id: string;
    label: string;
    children: FolderNode[];
    content?: ContentDescriptor;
};

export const filesystem: FolderNode = {
  id: "root",
  label: "root",
  children: [
    {
      id: "about",
      label: "about me",
      children: [],
      content: {
        type: "component",
        component: "AboutPanel"
      }
    },
    {
      id: "projects",
      label: "projects",
      children: [
        {
          id: "sonify",
          label: "sonify",
          children: [],
          content: {
            type: "component",
            component: "SonifyPanel"
          }
        },
        {
          id: "blackjack",
          label: "blackjack",
          children: [],
          content: {
            type: "component",
            component: "BlackjackPanel"
          }
        }
      ]
    },
    {
      id: "resume",
      label: "resume",
      children: [],
      content: {
        type: "component",
        component: "ResumePanel"
      }
    }
  ]
};

export function getNodeByPath(
  root: FolderNode,
  path: string[]
): FolderNode | null {
  if (path.length === 0) return null;
  if (path[0] !== root.id) return null;

  let current: FolderNode = root;

  for (let i = 1; i < path.length; i++) {
    const next = current.children.find(
      child => child.id === path[i]
    );

    if (!next) { return null; }

    current = next;
  }

  return current;
}
