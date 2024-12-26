# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React's `useEffect` hook: creating an infinite loop by modifying the state variable within the effect without specifying dependencies. This can lead to performance issues and crashes.

## Bug
The `bug.js` file contains a component that attempts to increment a state variable within the `useEffect` hook without specifying a dependency array. This causes the effect to run repeatedly, leading to an infinite loop and rapid state updates.

## Solution
The `bugSolution.js` file provides a corrected version of the component. By adding the state variable `count` to the dependency array, the effect only runs when the value of `count` changes.