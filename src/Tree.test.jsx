import { test, describe, expect } from 'vitest';
console.log("expect", expect);
import {render, screen} from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import {NodeDs, TreeDs} from './TreeDs';
import Tree, {Node} from './Tree';


describe("Tree Component", () => {
  test("Render a Node Component", () => {
    const nodeDs = new Node(100);
    const nodeComponent = render(<Node {...nodeDs} />);
    expect(nodeComponent).toBeInTheDocument();
  })
});