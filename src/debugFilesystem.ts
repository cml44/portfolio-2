import { filesystem } from "./filesystem.ts";
import type { FolderNode } from "./filesystem.ts";

function printTree(
  node: FolderNode,
  depth: number = 0
): void {
  const indent = "  ".repeat(depth);
  console.log(`${indent}- ${node.label} (${node.id})`);

  for (const child of node.children) {
    printTree(child, depth + 1);
  }
}

// Run debug
console.log("Filesystem Tree:");
printTree(filesystem);
