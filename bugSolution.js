This solution uses the `useEffect` hook to handle asynchronous operations. The `useEffect` ensures that `Constants.manifest` is only accessed after the component mounts, preventing the premature access error.

```javascript
import * as React from 'react';
import { useEffect, useState } from 'react';
import * as Constants from 'expo-constants';

export default function App() {
  const [bundleIdentifier, setBundleIdentifier] = useState(null);

  useEffect(() => {
    const getBundleIdentifier = async () => {
      // Only access Constants.manifest AFTER the app is fully loaded
      if (Constants.manifest) {
        setBundleIdentifier(Constants.manifest.bundleIdentifier);
      }
    };
    getBundleIdentifier();
  }, []);

  return (
    <View style={styles.container}>
      {bundleIdentifier ? (
        <Text>Bundle Identifier: {bundleIdentifier}</Text>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
}
```
This ensures the asynchronous operation to fetch the bundle identifier is only performed after the component is fully mounted, resolving the issue.