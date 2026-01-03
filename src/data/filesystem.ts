export type FileDescriptor = {
  type: 'file';
  label: string;
  href: string;
};

export type LinkDescriptor = {
    type: 'link';
    label: string;
    href: string;
};

export type FolderNode = {
  id: string;
  label: string;
  children: FolderNode[];
  files?: FileDescriptor[];
  links?: LinkDescriptor[];
};

export const filesystem: FolderNode = {
  id: 'root',
  label: 'root',
  children: [
    {
      id: 'about',
      label: 'about me',
      children: [],
      links: [
        {
            type: 'link',
            label: 'GitHub',
            href: 'https://github.com/cml44'
        }
      ]
    },
    {
      id: 'projects',
      label: 'projects',
      children: [
        {
          id: 'sonify',
          label: 'sonify',
          children: [],
        },
        {
          id: 'blackjack',
          label: 'blackjack',
          children: [],
        },
        {
          id: 'similarly',
          label: 'similarly',
          children: [],
        }
      ]
    },
    {
      id: 'resume',
      label: 'resume',
      children: [],
      files: [
        {
          type: 'file',
          label: 'Resume.pdf',
          href: '/Resume.pdf'
        }
      ]
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

    if (!next) return null;
    current = next;
  }

  return current;
}
