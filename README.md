# Expo Constants.manifest undefined in async function

This repository demonstrates a common bug encountered when using Expo's `Constants.manifest` object within asynchronous functions before the app's initialization is complete. Accessing properties of `Constants.manifest` prematurely leads to undefined values or errors.

## Problem

The `Constants.manifest` object is populated asynchronously. Attempting to access it too early, typically inside an async function executed before the app fully loads, results in undefined values such as `bundleIdentifier` and `version`.

## Solution

The solution involves ensuring `Constants.manifest` is accessed only after the app has initialized and the object has been populated. This is typically achieved by utilizing `useEffect` in functional components or lifecycle methods like `componentDidMount` in class components, making sure any async operations using this data are dependent on this completion.